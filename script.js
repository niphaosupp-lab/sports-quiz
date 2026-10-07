
const questions=[
["กีฬาชนิดใดใช้ลูกบอลและตะกร้าเป็นอุปกรณ์หลัก?",["ฟุตบอล","บาสเกตบอล","ว่ายน้ำ","กรีฑา"],1],
["การแข่งขันฟุตบอลทั่วไปมีผู้เล่นในสนามทีมละกี่คน?",["7 คน","9 คน","11 คน","15 คน"],2],
["กีฬาชนิดใดใช้ไม้แร็กเกตตีลูกข้ามตาข่าย?",["เทนนิส","ว่ายน้ำ","มวย","ยิมนาสติก"],0],
["การอบอุ่นร่างกายก่อนเล่นกีฬามีประโยชน์อย่างไร?",["ทำให้เหนื่อยเร็ว","ช่วยเตรียมร่างกายและลดความเสี่ยงการบาดเจ็บ","ทำให้ไม่ต้องดื่มน้ำ","ทำให้ไม่ต้องพัก"],1],
["กีฬาวอลเลย์บอลมีผู้เล่นในสนามทีมละกี่คน?",["4 คน","5 คน","6 คน","8 คน"],2],
["กีฬาใดเป็นกีฬาประเภทลู่และลาน?",["กรีฑา","ฟุตบอล","แบดมินตัน","วอลเลย์บอล"],0],
["การดื่มน้ำระหว่างออกกำลังกายช่วยเรื่องใด?",["เพิ่มการขาดน้ำ","ช่วยรักษาสมดุลของน้ำในร่างกาย","ทำให้กล้ามเนื้อหยุดทำงาน","ทำให้นอนหลับทันที"],1],
["กีฬาใดมีการเสิร์ฟและตีลูกขนไก่?",["แบดมินตัน","รักบี้","บาสเกตบอล","ฟุตบอล"],0],
["สิ่งใดสำคัญที่สุดในการเล่นกีฬาเป็นทีม?",["ไม่สนใจเพื่อนร่วมทีม","การสื่อสารและความร่วมมือ","เล่นคนเดียว","หลีกเลี่ยงกติกา"],1],
["หลังออกกำลังกายควรทำสิ่งใด?",["หยุดทันทีโดยไม่ผ่อนลง","คูลดาวน์และพักฟื้นร่างกาย","ออกแรงหนักกว่าเดิมทันที","ไม่ดื่มน้ำ"],1]
];
let i=0,score=0;
const $=id=>document.getElementById(id);
function show(id){["home","quiz","result","certificate"].forEach(x=>$(x).classList.toggle("hidden",x!==id))}
function render(){
 $("no").textContent=`ข้อ ${i+1}/${questions.length}`;
 $("score").textContent=score;
 $("bar").style.width=`${(i/questions.length)*100}%`;
 $("question").textContent=questions[i][0];
 $("feedback").textContent="";
 $("next").classList.add("hidden");
 const box=$("answers");box.innerHTML="";
 questions[i][1].forEach((a,n)=>{
  const b=document.createElement("button");b.className="answer";b.textContent=a;
  b.onclick=()=>answer(n,b);box.appendChild(b);
 });
}
function answer(n,btn){
 document.querySelectorAll(".answer").forEach(b=>b.disabled=true);
 const correct=questions[i][2];
 if(n===correct){score++;btn.classList.add("correct");$("feedback").textContent="✅ ถูกต้อง!";}
 else{btn.classList.add("wrong");document.querySelectorAll(".answer")[correct].classList.add("correct");$("feedback").textContent="❌ ยังไม่ถูก คำตอบที่ถูกแสดงด้วยสีเขียว";}
 $("score").textContent=score;$("next").classList.remove("hidden");
}
$("start").onclick=()=>{i=0;score=0;show("quiz");render()};
$("next").onclick=()=>{if(i<questions.length-1){i++;render()}else{$("final").textContent=score;show("result")}};
$("certBtn").onclick=()=>{const n=$("name").value.trim()||"ผู้เรียน";$("certName").textContent=n;$("date").textContent=new Date().toLocaleDateString("th-TH",{year:"numeric",month:"long",day:"numeric"});show("certificate")};
$("print").onclick=()=>window.print();
$("again").onclick=()=>{show("home")};
