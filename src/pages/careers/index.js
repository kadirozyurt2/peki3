import React, { Fragment } from "react";
import Header from "@/components/career/Header";
import InnerPageContent from "@/components/page/InnerPageContent";
import Marquee from "@/components/marquee_slider/Marquee";
import Faq from "@/components/faq/Faq";
const Careers = () => {
  return (
    <>
      <Header />
      <InnerPageContent
        title="Our vision is to make data science effortless for everyone."
        content={
          <Fragment>
            <p>
              Peki, OXYAI’in geliştirici ekibi tarafından yaratıldı ve 2016
              yılında kullanıcılarının hizmetine sunuldu. Hali hazırda kod
              gerektirmeyen yapay zeka eğitim arayüzü ile birlikte tüm sosyal
              medya mecraları ile web siteleri ve mobil uygulamalarına entegre
              olabilir Dünyanın tek omni-channel chatbot platformu olarak yerel
              ve uluslararası markalara hizmet veriyor.
              <br />
              <br />
              Ekibinde akademisyenler, makine öğrenmesi uzmanları ve full-stack
              geliştiriciler barından OXYAI, Peki ürünü ile yapay zeka
              alanındaki tüm bilgi birikimini hayata geçidi. Yapay Zekalı
              chatbot’ların temel fonksiyonlarını makine öğrenmesi algoritmaları
              ile geliştirildi ve ayrıca platforma sesli asistan yetenekleri
              kazandırılarak bu sayede uçtan uca yapay zekalı asistan hizmetleri
              kullanılabilir hale getirildi.
              <br />
              <br />
              Bireyler, küçük orta ölçekli şirketler ve endüstri seviyesi
              şirketlerin çok rahat geliştirme yaptığı ve istedikleri
              yeteneklere sahip chatbotlar yaratabildikleri Peki aynı zamanda
              geliştiriceler için de bir pazar yeri olarak hizmetlerini
              satabildikleri bir platform.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Fragment>
        }
      />
      <Marquee
        title="What is our values?"
      />
      <Faq title="Currently open positions" />
    </>
  );
};

export default Careers;
