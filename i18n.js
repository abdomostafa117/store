// ترجمة المتجر (عربي / English). الزر في الهيدر بيبدّل بين اللغتين.
// عشان تضيف أو تعدّل ترجمة: ضيف سطر في القاموس D بالشكل  "النص العربي":"English text"
(function(){
var D={
"الرئيسية":"Home","المنتجات":"Products","الرجال":"Men","النساء":"Women","الإكسسوارات":"Accessories","من نحن":"About us","تواصل معنا":"Contact us",
"القائمة":"Menu","بحث":"Search","حسابي":"My account","السلة":"Cart","ابحث عن منتج...":"Search for a product...","التنقل":"Navigation","مسار التصفح":"Breadcrumb",
"ستايلك .. بطريقتك":"Your style, your way","اكتشف أحدث التصاميم من ملابس وإكسسوارات بجودة عالية تناسب كل الأذواق":"Discover the latest designs in clothing and accessories, high quality for every taste",
"تسوّق الآن":"Shop now","دفا وأناقة في هودي واحد":"Warmth and elegance in one hoodie","تشكيلة النساء بألوان هادية وقصّات مريحة تناسب يومك كله":"Women's collection in calm colors and comfortable cuts for your whole day",
"اللمسة الأخيرة لإطلالتك":"The final touch to your look","كابات وإكسسوارات بتكمّل ستايلك وتفرّقك عن غيرك":"Caps and accessories that complete your style and set you apart",
"شحن سريع":"Fast shipping","لجميع محافظات مصر":"To all governorates in Egypt","طرق دفع متعددة":"Multiple payment methods","فودافون كاش · إنستا باي · فوري · عند الاستلام":"Vodafone Cash · InstaPay · Fawry · Cash on delivery",
"استرجاع سهل":"Easy returns","خلال 14 يوم":"Within 14 days","دعم العملاء":"Customer support","على مدار الساعة":"Around the clock",
"جميع المنتجات":"All products","منتجات مميزة":"Featured products","اختياراتنا لك بعناية":"Our carefully picked selection","عرض الكل":"View all",
"آراء عملائنا":"Customer reviews","تقييمات العملاء":"Customer reviews","تقييم تجريبي":"Sample review","لسه مفيش تقييمات للمنتج ده.":"No reviews for this product yet.",
"أكتوبر 2026":"October 2026","سبتمبر 2026":"September 2026",
"أضف للسلة":"Add to cart","المفضلة":"Favorites","أنقص":"Decrease","زوّد":"Increase","المقاس":"Size","مقاس واحد":"One size","جديد":"New","الأكثر مبيعًا":"Best seller","خصم":"Sale",
"الكل":"All","الأحدث":"Newest","الأقل سعرًا":"Lowest price","الأعلى سعرًا":"Highest price","ترتيب":"Sort","مفيش منتجات مطابقة. جرّب بحث تاني.":"No matching products. Try another search.",
"تسوّق قسم تاني":"Shop another category","هوديز وتيشيرتات وبناطيل بقصّات مريحة لكل يوم":"Hoodies, tees and pants in comfortable cuts for every day",
"تشكيلة بألوان هادية وقصّات عصرية مريحة":"A collection in calm colors and comfortable, modern cuts","كابات وإكسسوارات بتكمّل ستايلك":"Caps and accessories that complete your style",
"استرجاع واستبدال خلال 14 يوم":"Returns and exchanges within 14 days","الدفع بفودافون كاش أو إنستا باي أو عند الاستلام":"Pay with Vodafone Cash, InstaPay or cash on delivery","قد يعجبك أيضًا":"You may also like",
"هودي كلاسيك AM":"AM Classic Hoodie","تيشيرت أوفر سايز AM":"AM Oversized T-Shirt","كاب كلاسيك AM":"AM Classic Cap","بنطال رياضي AM":"AM Sweatpants","هودي أوفر سايز بيج":"Beige Oversized Hoodie",
"هودي قطن ثقيل بقصّة مريحة وشعار AM مطرّز على الصدر. دافي وناعم وبيفضل شكله حلو بعد الغسيل.":"Heavy cotton hoodie with a comfortable cut and an embroidered AM logo on the chest. Warm, soft, and keeps its look after washing.",
"تيشيرت أوفر سايز من قطن مصري ناعم بقصّة واسعة عصرية وشعار AM صغير على الصدر.":"Oversized tee in soft Egyptian cotton with a modern relaxed fit and a small AM logo on the chest.",
"كاب قطن بشعار AM مطرّز، قابل للتعديل ويناسب كل المقاسات.":"Cotton cap with an embroidered AM logo, adjustable to fit all sizes.",
"بنطال رياضي مريح بخصر مطاطي وجيوب جانبية، مناسب للتمرين وللخروج.":"Comfortable sweatpants with an elastic waist and side pockets, great for workouts and going out.",
"هودي أوفر سايز بلون بيج هادي وقماش ناعم من الداخل، بقصّة مريحة وعصرية.":"Oversized hoodie in a calm beige with a soft inner fabric, in a comfortable modern cut.",
"سلة التسوق":"Shopping cart","سلتك فاضية":"Your cart is empty","اختار حاجة تعجبك من المنتجات.":"Pick something you like from the products.","حذف":"Remove",
"الشحن مجاني على طلبك":"Free shipping on your order","المجموع":"Subtotal","الشحن":"Shipping","مجاني":"Free","الإجمالي":"Total","إتمام الطلب":"Checkout","ملخص الطلب":"Order summary",
"الاسم بالكامل":"Full name","رقم الموبايل":"Mobile number","العنوان بالتفصيل":"Detailed address","طريقة الدفع":"Payment method","فودافون كاش":"Vodafone Cash","إنستا باي":"InstaPay","فوري":"Fawry",
"الدفع عند الاستلام":"Cash on delivery","عند الاستلام":"Cash on delivery","تأكيد الطلب":"Confirm order","بعد التأكيد هتبعت الطلب لينا على واتساب لتأكيده.":"After confirming, you'll send the order to us on WhatsApp to finalize it.",
"اكتب اسمك بالكامل.":"Please enter your full name.","رقم الموبايل لازم يكون 11 رقم ويبدأ بـ 01.":"Mobile number must be 11 digits and start with 01.","اكتب العنوان بالتفصيل (المحافظة والشارع والمنطقة).":"Enter your detailed address (governorate, street, area).",
"تم تجهيز طلبك":"Your order is ready","رقم الطلب":"Order number","خطوة أخيرة: ابعت الطلب لنا على واتساب علشان نأكّده ونجهّزه.":"Last step: send us the order on WhatsApp so we can confirm and prepare it.",
"إرسال الطلب على واتساب":"Send order on WhatsApp","هنتواصل معاك لتأكيد الطلب.":"We'll contact you to confirm your order.","كمّل تسوّق":"Continue shopping",
"لسه ما ضفتش حاجة للمفضلة. دوس على القلب في أي منتج.":"Nothing in your favorites yet. Tap the heart on any product.",
"بياناتي":"My details","بتتحفظ على جهازك وبتتعبّى تلقائي عند الطلب.":"Saved on your device and filled in automatically at checkout.","الاسم":"Name","العنوان":"Address","حفظ البيانات":"Save details","طلباتي":"My orders","مفيش طلبات لسه.":"No orders yet.",
"AM علامة ملابس مصرية بتؤمن إن الستايل مش لازم يكون معقّد. بنصمّم قطع بسيطة بخامات عالية الجودة وقصّات مريحة، تلبسها كل يوم وتفضل شكلها حلو.":"AM is an Egyptian clothing brand that believes style doesn't have to be complicated. We design simple pieces in high-quality fabrics and comfortable cuts that you can wear every day and still look great.",
"إحنا بنوعد بـ":"Our promise","جودة خامات مظبوطة، شحن لكل محافظات مصر، واسترجاع سهل خلال 14 يوم لو المقاس مش مناسب.":"Quality fabrics, shipping to every governorate in Egypt, and easy returns within 14 days if the size isn't right.",
"رسالتك":"Your message","إرسال عبر واتساب":"Send via WhatsApp","بيانات التواصل":"Contact details","خدمة العملاء متاحة يوميًا.":"Customer service is available daily.","الشحن والتوصيل لجميع محافظات مصر.":"Shipping and delivery to all governorates in Egypt.",
"اتضاف للسلة ✓":"Added to cart ✓","تم حفظ بياناتك ✓":"Your details were saved ✓","اكتب رسالتك الأول":"Write your message first","التواصل غير متاح حاليًا":"Contact is currently unavailable",
"ملابس وإكسسوارات بجودة عالية توصلك لحد باب البيت.":"High-quality clothing and accessories delivered to your door.","تسوّق":"Shop","كل المنتجات":"All products","المتجر":"Store","حسابي وطلباتي":"My account & orders","طرق الدفع":"Payment methods",
"© 2026 AM. جميع الحقوق محفوظة.":"© 2026 AM. All rights reserved.","الأقسام":"Categories",
"الدفع بالمحفظة أو التحويل":"Paying by wallet or transfer","لو هتدفع فودافون كاش أو أي محفظة إلكترونية أو إنستا باي: حوّل المبلغ وابعت لنا":"If you pay with Vodafone Cash, any e-wallet or InstaPay: transfer the amount and send us","سكرين شوت التحويل":"a screenshot of the transfer","على واتساب مع الطلب.":"on WhatsApp with your order.","رقم التحويل:":"Transfer number:","لو هتدفع بمحفظة (فودافون كاش وغيرها) ابعت سكرين شوت التحويل على واتساب.":"If you pay by wallet (Vodafone Cash etc.), send a screenshot of the transfer on WhatsApp.",

"صمّم تيشيرتك":"Design your tee","تسوّق حسب القسم":"Shop by category","اختار القسم اللي يعجبك":"Pick the category you like","صمّم تيشيرتك بنفسك":"Design your own tee",
"اختار اللون، اكتب اللي تحبه أو ارفع صورتك، وشوف تصميمك قدامك قبل ما تطلب.":"Pick a color, type what you like or upload your picture, and see your design before you order.","ابدأ التصميم":"Start designing",
"أكتر من مجرد ملابس":"More than just clothes","اعرف أكتر":"Learn more","خامات مظبوطة":"Quality fabrics","قطن مريح وتشطيب نضيف":"Comfortable cotton and clean finishing",
"قصّات عصرية":"Modern cuts","بسيطة ومريحة تناسب كل يوم":"Simple and comfortable for everyday wear","شحن لكل المحافظات":"Shipping to all governorates","بنوصّل لحد باب البيت في كل مصر":"We deliver to your door across Egypt",
"صمّم بنفسك":"Design it yourself","اطبع كلامك أو صورتك على تيشيرت":"Print your text or picture on a tee",
"إزاي تطلب؟":"How to order","اختار":"Choose","اختار من الأقسام أو صمّم تيشيرتك بنفسك":"Choose from the categories or design your own tee","أكّد":"Confirm","املا بياناتك وابعت الطلب لنا على واتساب":"Fill in your details and send us the order on WhatsApp",
"استلم":"Receive","هنأكّد معاك ونوصّلك لحد باب البيت":"We'll confirm with you and deliver to your door",
"أسئلة شائعة":"Frequently asked questions","الشحن بكام؟":"How much is shipping?","هقدر أسترجع المنتج؟":"Can I return a product?","أيوه، استرجاع واستبدال خلال 14 يوم.":"Yes, returns and exchanges within 14 days.",
"إزاي أدفع؟":"How do I pay?","فودافون كاش أو إنستا باي أو فوري أو عند الاستلام. لو بالمحفظة أو إنستا باي ابعت سكرين شوت التحويل على واتساب.":"Vodafone Cash, InstaPay, Fawry or cash on delivery. If you pay by wallet or InstaPay, send a screenshot of the transfer on WhatsApp.","شاركنا رأيك":"Share your opinion",
"اختار اللون، ضيف كلام أو صورتك، وحرّك العناصر بإيدك على التيشيرت.":"Pick a color, add text or your picture, and drag items around on the tee.","الوجه الأمامي":"Front","الظهر":"Back",
"لون التيشيرت":"Tee color","ضيف تصميمك":"Add your design","+ أضف نص":"+ Add text","+ ارفع صورة":"+ Upload image","عدّل العنصر المحدد":"Edit selected item","اضغط على أي عنصر في التيشيرت علشان تعدّله.":"Tap any item on the tee to edit it.",
"النص":"Text","الخط":"Font","اللون":"Color","الحجم":"Size","الدوران":"Rotation","حذف العنصر":"Delete item","المقاس والكمية":"Size and quantity",
"سعر التيشيرت":"Tee price","طباعة الأمام":"Front print","طباعة الظهر":"Back print","أضف التصميم للسلة":"Add design to cart","حمّل التصميم (PNG)":"Download design (PNG)",
"لو رفعت صورة، هتبعتها لنا على واتساب مع الطلب علشان نطبعها.":"If you upload an image, you'll send it to us on WhatsApp with the order so we can print it.","معاينة التيشيرت":"Tee preview",
"أسود":"Black","أبيض":"White","كحلي":"Navy","رمادي":"Gray","زيتي":"Olive","بيج":"Beige","أحمر":"Red",
"ضيف نص أو صورة على التيشيرت الأول":"Add text or an image to the tee first","الصورة كبيرة. اختار صورة أقل من 5 ميجا.":"Image too large. Choose one under 5 MB.","تعذّر قراءة الصورة":"Couldn't read the image",
"تيشيرت مصمَّم خصيصًا":"Custom-designed tee","تصميم خاص":"Custom design","ملفات التصميم":"Design files","حمّل صور تصميمك وابعتها لنا في محادثة واتساب مع الطلب.":"Download your design images and send them to us in the WhatsApp chat with your order.",
"حمّل الوجه الأمامي":"Download front","حمّل الظهر":"Download back",
"تفاصيل المنتج":"Product details","المواصفات":"Specifications","كود المنتج":"Product code","الشحن والاسترجاع":"Shipping & returns","الخامة":"Material","القصّة":"Fit","الشعار":"Logo","العناية":"Care","الخصر":"Waist","الجيوب":"Pockets",
"قطن ثقيل":"Heavy cotton","عادية مريحة":"Comfortable regular fit","AM مطرّز على الصدر":"Embroidered AM on the chest","قطن مصري ناعم":"Soft Egyptian cotton","أوفر سايز":"Oversized","AM صغير على الصدر":"Small AM on the chest","أوف وايت":"Off-white",
"قطن":"Cotton","واحد، قابل للتعديل":"One size, adjustable","AM مطرّز":"Embroidered AM","رياضية مريحة":"Comfortable athletic fit","مطاطي":"Elastic","جانبية":"Side pockets","قماش ناعم من الداخل":"Soft inner fabric",
"غسيل على 30 درجة، كي على حرارة منخفضة":"Wash at 30°C, iron on low heat","استرجاع واستبدال خلال 14 يوم لو المقاس أو المنتج مش مناسب.":"Returns and exchanges within 14 days if the size or product doesn't fit.","هنأكّد معاك الطلب قبل التجهيز.":"We'll confirm your order with you before preparing it.",
"تكبير":"Zoom in","تصغير":"Zoom out","إغلاق":"Close","السابق":"Previous","التالي":"Next","الحجم الأصلي":"Reset zoom"
};
var RX=[[/^(\S+) من 5 · (\d+) تقييم$/,"$1 out of 5 · $2 reviews"],[/^(\d+) منتج$/,"$1 products"],[/^نتائج البحث عن "(.*)" · (\d+) منتج$/,'Search results for "$1" · $2 products'],
[/^المقاس: (.+) · (EGP .+)$/,"Size: $1 · $2"],[/^باقي (EGP .+) ويبقى الشحن مجاني$/,"$1 more for free shipping"],[/^شحن لكل المحافظات، ومجاني فوق (EGP .+)$/,"Shipping to all governorates, free over $1"],
[/^شريحة (\d+)$/,"Slide $1"],[/^الإجمالي (EGP .+)$/,"Total $1"],[/^(\d) من 5$/,"$1 out of 5"],[/^صورة (\d+)$/,"Image $1"],[/^تكلفة الشحن (EGP [\d,]+)، ومجانًا للطلبات فوق (EGP [\d,]+)$/,"Shipping costs $1, free for orders over $2"],[/^(EGP [\d,]+)، ومجاني للطلبات فوق (EGP [\d,]+)\.$/,"$1, and free for orders over $2."]];
var AT=["placeholder","aria-label","alt","title"],en=false;
function tr(s){var t=s.trim();if(!t)return s;var r=D[t];
 if(r==null)for(var i=0;i<RX.length;i++)if(RX[i][0].test(t)){r=t.replace(RX[i][0],RX[i][1]);break}
 if(r==null){var m=t.split(/( · | × |، )/);if(m.length>1){var ch=0,o=m.map(function(p,k){if(k%2)return p=="، "?", ":p;var q=D[p.trim()];if(q!=null){ch=1;return q}return p});if(ch)r=o.join("")}}
 return r==null?s:s.replace(t,r)}
window.AM_EN=function(s){return tr(String(s))};
function node(n){
 if(n.nodeType==3){if(en){if(n.__ar==null)n.__ar=n.nodeValue;var v=tr(n.__ar);if(n.nodeValue!==v)n.nodeValue=v}else if(n.__ar!=null&&n.nodeValue!==n.__ar)n.nodeValue=n.__ar;return}
 if(n.nodeType!=1||n.tagName=="SCRIPT"||n.tagName=="STYLE"||n.getAttribute("translate")=="no")return;
 for(var i=0;i<AT.length;i++){var a=AT[i];if(!n.hasAttribute(a))continue;n.__at=n.__at||{};
  if(en){if(n.__at[a]==null)n.__at[a]=n.getAttribute(a);var v2=tr(n.__at[a]);if(n.getAttribute(a)!==v2)n.setAttribute(a,v2)}
  else if(n.__at[a]!=null&&n.getAttribute(a)!==n.__at[a])n.setAttribute(a,n.__at[a])}
 for(var c=n.firstChild;c;c=c.nextSibling)node(c)}
new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(node)})}).observe(document.body,{childList:true,subtree:true});
function set(l,first){en=l=="en";var d=document.documentElement;d.lang=en?"en":"ar";d.dir=en?"ltr":"rtl";
 try{localStorage.setItem("am-lang",l)}catch(e){}
 document.querySelectorAll(".lang button").forEach(function(b){b.classList.toggle("on",b.dataset.l==l)});
 node(document.body);if(!first&&typeof route=="function")route()}
document.addEventListener("click",function(e){var b=e.target.closest("[data-l]");if(b)set(b.dataset.l)});
var saved="ar";try{saved=localStorage.getItem("am-lang")||"ar"}catch(e){}
set(saved,true);if(/[?&]q=/.test(location.hash)&&typeof route=="function")route();
})();
