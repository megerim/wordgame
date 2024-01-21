import { Button, Link } from "@nextui-org/react";

export default function HowToPage() {
  return (
    <div className="antialiased px-1">
      <h3 className="text-center font-bold text-2xl">Nasıl Çalışıyor?</h3>
      <h5 className="underline font-bold">Kelime Kartları</h5>
      <p className="text-left text-sm mt-2">
        Kelime kartlarında bilmediğiniz bir kelime olursa, 5 kez tıklanırsa kelimenin çevirisi altında yazacaktır.
      <br/>
      <br/>
        Sarı renk gözükmediğinde bir problem oluşmuyor, doğru eşleştirme yapılınca düzelecektir.
      </p>
      <br/>
      <h5 className="underline font-bold">Hızlı Quiz</h5>
      <p className="text-left text-sm mt-2">
        Eğer soruyu yanlış yapar ve öğrenmek isterseniz, soru işareti butonuna tıklayarak çözümü ve hangi konuya çalışmanız gerektiğini öğrenebilirsiniz.
      </p>

      

      

      <Link className="text-3xl my-5 flex justify-center" href="/">
        <Button size="lg" className="min-w-48">
          Ana Sayfaya Dön
        </Button>
      </Link>
    </div>
  );
}
