// استقبال الطلبات والزيارات من المتجر وحفظها في Google Sheet بتاعك (مجاني، من غير سيرفر).
// الخطوات في ملف README.txt. غيّر التوكن تحت لكلمة سر طويلة (20 حرف على الأقل) وانسخها في لوحة الإدارة.
const TOKEN = "غيّر-الكلمة-دي-لكلمة-سر-طويلة-ومعقدة";

function sh_(name, head) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName(name);
  if (!s) { s = ss.insertSheet(name); s.appendRow(head); }
  return s;
}

// المتجر بيبعت هنا (الزوّار): طلب جديد أو حدث زيارة
function doPost(e) {
  try {
    if (!e.postData || e.postData.length > 30000) return ContentService.createTextOutput("big");
    const b = JSON.parse(e.postData.contents);
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      if (b.k === "order" && b.o && b.o.no && String(b.o.no).length < 40 && /^01\d{9}$/.test(String(b.o.ph))) {
        const o = b.o;
        const sheet = sh_("orders", ["no", "ts", "json"]);
        const dup = sheet.getDataRange().getValues().some(r => r[0] === o.no);
        if (!dup) sheet.appendRow([o.no, Number(o.ts) || Date.now(), JSON.stringify(o)]);
      } else if (b.k === "ev" && b.ev && b.ev.t) {
        const v = b.ev;
        sh_("events", ["ts", "vid", "sid", "t", "d"]).appendRow([Number(v.ts) || Date.now(), String(v.vid).slice(0, 40), String(v.sid).slice(0, 40), String(v.t).slice(0, 20), JSON.stringify(v.d || null)]);
      }
    } finally { lock.releaseLock(); }
  } catch (err) {}
  return ContentService.createTextOutput("ok");
}

// لوحة الإدارة بتقرا من هنا ومعاها التوكن (محدش غيرك يعرفه)
function doGet(e) {
  if (!e.parameter || e.parameter.token !== TOKEN) return out_({ error: "auth" });
  const since = Number(e.parameter.since) || 0;
  const orders = sh_("orders", ["no", "ts", "json"]).getDataRange().getValues().slice(1)
    .filter(r => Number(r[1]) > since).map(r => JSON.parse(r[2]));
  const events = sh_("events", ["ts", "vid", "sid", "t", "d"]).getDataRange().getValues().slice(1)
    .filter(r => Number(r[0]) > since).map(r => ({ ts: Number(r[0]), vid: r[1], sid: r[2], t: r[3], d: JSON.parse(r[4] || "null") }));
  return out_({ orders: orders, events: events });
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
