// Erbay Sitesi Imports
import erbayExt1 from "@/assets/erbay-sitesi/exterior-1.jpg";
import erbayExt2 from "@/assets/erbay-sitesi/exterior-2.jpg";
import erbayExt3 from "@/assets/erbay-sitesi/exterior-3.jpg";
import erbayExt4 from "@/assets/erbay-sitesi/exterior-4.jpg";
import erbayExt5 from "@/assets/erbay-sitesi/exterior-5.jpg";
import erbayExt6 from "@/assets/erbay-sitesi/exterior-6.jpg";
import erbayExt7 from "@/assets/erbay-sitesi/exterior-7.jpg";
import erbayExt8 from "@/assets/erbay-sitesi/exterior-8.jpg";
import erbayExt9 from "@/assets/erbay-sitesi/exterior-9.jpg";
import erbayExt10 from "@/assets/erbay-sitesi/exterior-10.jpg";
import erbayInt1 from "@/assets/erbay-sitesi/interior-1.jpg";
import erbayInt2 from "@/assets/erbay-sitesi/interior-2.jpg";
import erbayInt3 from "@/assets/erbay-sitesi/interior-3.jpg";
import erbayInt4 from "@/assets/erbay-sitesi/interior-4.jpg";
import erbayInt5 from "@/assets/erbay-sitesi/interior-5.jpg";
import erbayInt6 from "@/assets/erbay-sitesi/interior-6.jpg";
import erbayInt7 from "@/assets/erbay-sitesi/interior-7.jpg";
import erbayInt8 from "@/assets/erbay-sitesi/interior-8.jpg";
import erbayInt9 from "@/assets/erbay-sitesi/interior-9.jpg";
import erbayInt10 from "@/assets/erbay-sitesi/interior-10.jpg";
import erbayInt11 from "@/assets/erbay-sitesi/interior-11.jpg";
import erbayInt12 from "@/assets/erbay-sitesi/interior-12.jpg";
import erbayAer1 from "@/assets/erbay-sitesi/aerial-1.jpg";
import erbayAer2 from "@/assets/erbay-sitesi/aerial-2.jpg";
import erbayAer3 from "@/assets/erbay-sitesi/aerial-3.jpg";
import erbayAer4 from "@/assets/erbay-sitesi/aerial-4.jpg";
import erbayAer5 from "@/assets/erbay-sitesi/aerial-5.jpg";
import erbayAer6 from "@/assets/erbay-sitesi/aerial-6.jpg";
import erbayAer7 from "@/assets/erbay-sitesi/aerial-7.jpg";
import erbayAer8 from "@/assets/erbay-sitesi/aerial-8.jpg";
import erbayVideo from "@/assets/erbay-sitesi/tanitim.mp4";

// Çelik Premium Loft Imports
import loftExt1 from "@/assets/durak-mahallesi/exterior-1.jpg";
import loftExt2 from "@/assets/durak-mahallesi/exterior-2.jpg";
import loftExt3 from "@/assets/durak-mahallesi/exterior-3.jpg";
import loftExt4 from "@/assets/durak-mahallesi/exterior-4.jpg";
import loftExt5 from "@/assets/durak-mahallesi/exterior-5.jpg";
import loftExt6 from "@/assets/durak-mahallesi/exterior-6.jpg";
import loftExt7 from "@/assets/durak-mahallesi/exterior-7.jpg";
import loftExt8 from "@/assets/durak-mahallesi/exterior-8.jpg";
import loftExt9 from "@/assets/durak-mahallesi/exterior-9.jpg";
import loftExt10 from "@/assets/durak-mahallesi/exterior-10.jpg";
import loftExt11 from "@/assets/durak-mahallesi/exterior-11.jpg";
import loftExt12 from "@/assets/durak-mahallesi/exterior-12.jpg";
import loftExt13 from "@/assets/durak-mahallesi/exterior-13.jpg";
import loftInt1 from "@/assets/durak-mahallesi/interior-1.jpg";
import loftInt2 from "@/assets/durak-mahallesi/interior-2.jpg";
import loftInt3 from "@/assets/durak-mahallesi/interior-3.jpg";
import loftInt4 from "@/assets/durak-mahallesi/interior-4.jpg";
import loftInt5 from "@/assets/durak-mahallesi/interior-5.jpg";
import loftInt6 from "@/assets/durak-mahallesi/interior-6.jpg";
import loftInt7 from "@/assets/durak-mahallesi/interior-7.jpg";
import loftInt8 from "@/assets/durak-mahallesi/interior-8.jpg";
import loftInt9 from "@/assets/durak-mahallesi/interior-9.jpg";
import loftInt10 from "@/assets/durak-mahallesi/interior-10.jpg";
import loftInt11 from "@/assets/durak-mahallesi/interior-11.jpg";
import loftInt12 from "@/assets/durak-mahallesi/interior-12.jpg";
import loftInt13 from "@/assets/durak-mahallesi/interior-13.jpg";
import loftInt14 from "@/assets/durak-mahallesi/interior-14.jpg";
import loftInt15 from "@/assets/durak-mahallesi/interior-15.jpg";
import loftInt16 from "@/assets/durak-mahallesi/interior-16.jpg";
import loftInt17 from "@/assets/durak-mahallesi/interior-17.jpg";
import loftInt18 from "@/assets/durak-mahallesi/interior-18.jpg";
import loftInt19 from "@/assets/durak-mahallesi/interior-19.jpg";
import loftInt20 from "@/assets/durak-mahallesi/interior-20.jpg";
import loftInt21 from "@/assets/durak-mahallesi/interior-21.jpg";
import loftInt22 from "@/assets/durak-mahallesi/interior-22.jpg";
import loftInt23 from "@/assets/durak-mahallesi/interior-23.jpg";
import loftInt24 from "@/assets/durak-mahallesi/interior-24.jpg";

import loftAer1 from "@/assets/durak-mahallesi/aerial-1.jpg";
import loftAer2 from "@/assets/durak-mahallesi/aerial-2.jpg";
import loftAer3 from "@/assets/durak-mahallesi/aerial-3.jpg";
import loftVideo from "@/assets/durak-mahallesi/tanitim.mp4";

// Trend Palas Imports
import trendComingSoon from "@/assets/brand/trend-palas-coming-soon.png";

export interface ProjectFeature {
  title: string;
  desc: string;
  iconName: "villa" | "pool" | "garage" | "garden" | "center" | "quality";
}

export interface ProjectStat {
  val: string;
  unit: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  label: string;
  cat: "Dış Görünüm" | "İç Mekan" | "Hava Çekimi";
}

export interface ProjectData {
  id: string;
  name: string;
  eyebrow: string;
  headline: string;
  subHeadline: string;
  description: string;
  heroImage: string;
  badge: string;
  location: string;
  deliveryYear: string;
  stats: ProjectStat[];
  features: ProjectFeature[];
  images: ProjectImage[];
  videoSrc?: string;
  videoPoster?: string;
  videoDescription?: string;
  contactText: string;
  isComingSoon?: boolean;
}

export const projects: ProjectData[] = [
  {
    id: "erkancelik-insaat",
    name: "Erkan Çelik İnşaat",
    eyebrow: "— Erkan Çelik İnşaat & GAYRİMENKUL —",
    headline: "Erbay Sitesi",
    subHeadline: "Elit Villalar",
    description: "LÜLEBURGAZ'DA DOĞAYLA İÇ İÇE, MERKEZE 10 DAKİKA · Özel havuz · Garaj · Bahçe",
    heroImage: erbayExt3,
    badge: "Lüks Villa Projesi",
    location: "Lüleburgaz, Kırklareli",
    deliveryYear: "2027",
    stats: [
      { val: "10", unit: " DK", label: "Merkeze Uzaklık" },
      { val: "100+", unit: " m²", label: "Villa Büyüklüğü" },
      { val: "90+", unit: " m²", label: "Özel Bahçe" },
      { val: "2027", unit: "", label: "Teslim Yılı" },
    ],
    features: [
      {
        iconName: "villa",
        title: "Özel Villa",
        desc: "Her aile için bağımsız, doğayla iç içe modern villa tasarımı",
      },
      {
        iconName: "pool",
        title: "Kişisel Havuz",
        desc: "Her villanın kendine ait özel yüzme havuzu ve güneş terası",
      },
      {
        iconName: "garage",
        title: "Üstü Kapalı Garaj",
        desc: "Geniş garaj – araçlarınız için güvenli ve geniş bir alan",
      },
      {
        iconName: "garden",
        title: "Özel Bahçe",
        desc: "Peyzajlı geniş bahçe – çocuklarınız ve dinlenme için yeşil alan",
      },
      {
        iconName: "center",
        title: "10 Dk Merkez",
        desc: "Şehrin tüm imkânlarına 10 dakika – huzur ve konfor bir arada",
      },
      {
        iconName: "quality",
        title: "Üstün Kalite",
        desc: "A+ malzeme, modern mimari ve yüksek işçilik standardıyla inşaat",
      },
    ],
    images: [
      { src: erbayExt1, label: "Dış Görünüm 1", cat: "Dış Görünüm" },
      { src: erbayExt2, label: "Dış Görünüm 2", cat: "Dış Görünüm" },
      { src: erbayExt3, label: "Dış Görünüm 3", cat: "Dış Görünüm" },
      { src: erbayExt4, label: "Dış Görünüm 4", cat: "Dış Görünüm" },
      { src: erbayExt5, label: "Dış Görünüm 5", cat: "Dış Görünüm" },
      { src: erbayExt6, label: "Dış Görünüm 6", cat: "Dış Görünüm" },
      { src: erbayExt7, label: "Dış Görünüm 7", cat: "Dış Görünüm" },
      { src: erbayExt8, label: "Dış Görünüm 8", cat: "Dış Görünüm" },
      { src: erbayExt9, label: "Dış Görünüm 9", cat: "Dış Görünüm" },
      { src: erbayExt10, label: "Dış Görünüm 10", cat: "Dış Görünüm" },
      { src: erbayInt1, label: "İç Mekan 1", cat: "İç Mekan" },
      { src: erbayInt2, label: "İç Mekan 2", cat: "İç Mekan" },
      { src: erbayInt3, label: "İç Mekan 3", cat: "İç Mekan" },
      { src: erbayInt4, label: "İç Mekan 4", cat: "İç Mekan" },
      { src: erbayInt5, label: "İç Mekan 5", cat: "İç Mekan" },
      { src: erbayInt6, label: "İç Mekan 6", cat: "İç Mekan" },
      { src: erbayInt7, label: "İç Mekan 7", cat: "İç Mekan" },
      { src: erbayInt8, label: "İç Mekan 8", cat: "İç Mekan" },
      { src: erbayInt9, label: "İç Mekan 9", cat: "İç Mekan" },
      { src: erbayInt10, label: "İç Mekan 10", cat: "İç Mekan" },
      { src: erbayInt11, label: "İç Mekan 11", cat: "İç Mekan" },
      { src: erbayInt12, label: "İç Mekan 12", cat: "İç Mekan" },
      { src: erbayAer1, label: "Hava Çekimi 1", cat: "Hava Çekimi" },
      { src: erbayAer2, label: "Hava Çekimi 2", cat: "Hava Çekimi" },
      { src: erbayAer3, label: "Hava Çekimi 3", cat: "Hava Çekimi" },
      { src: erbayAer4, label: "Hava Çekimi 4", cat: "Hava Çekimi" },
      { src: erbayAer5, label: "Hava Çekimi 5", cat: "Hava Çekimi" },
      { src: erbayAer6, label: "Hava Çekimi 6", cat: "Hava Çekimi" },
      { src: erbayAer7, label: "Hava Çekimi 7", cat: "Hava Çekimi" },
      { src: erbayAer8, label: "Hava Çekimi 8", cat: "Hava Çekimi" },
    ],
    videoSrc: erbayVideo,
    videoPoster: erbayAer1,
    videoDescription: "Yaklaşık 1 dakikalık tanıtım filmimizde proje alanını, villa tasarımlarını ve çevre düzenlemesini keşfedin.",
    contactText: "Projeye dair tüm sorularınızı yanıtlamak, yerinde gezi ayarlamak ve fiyatlandırma bilgisi almak için bizimle iletişime geçin. Satış ekibimiz size özel çözümler sunmak için hazır.",
  },
  {
    id: "durak-mahallesi",
    name: "Golden Life Villas",
    eyebrow: "— YAŞAM YAPI & MÜHENDİSLİK —",
    headline: "Golden Life Villas",
    subHeadline: "Modern Yaşam",
    description: "LÜLEBURGAZ DURAK MAHALLESİ'NDE TRİPLEX VİLLA · Genİş teraslar · Otopark · Havuz · Yeşİl Alan",
    heroImage: loftExt1,
    badge: "Lüks Loft & Rezidans",
    location: "Lüleburgaz, Durak Mahallesi",
    deliveryYear: "2027",
    stats: [
      { val: "5", unit: " DK", label: "Hızlı Trene Yakınlık" },
      { val: "5", unit: " DK", label: "Çevreyoluna Yakınlık" },
      { val: "10", unit: " DK", label: "Şehir Merkezine Yakınlık" },
      { val: "2027", unit: "", label: "Teslim Yılı" },
    ],
    features: [
      {
        iconName: "villa",
        title: "Modern Triplex Villalar",
        desc: "Yüksek tavanlı, ferah and modern mimari tasarımlı lüks triplex villalar",
      },
      {
        iconName: "pool",
        title: "Sosyal Alanlar",
        desc: "Site içi dinlenme alanları, açık yüzme havuzu, geniş peyzaj ve yürüyüş yolları",
      },
      {
        iconName: "garage",
        title: "Otopark",
        desc: "Site sakinlerine özel park alanı",
      },
      {
        iconName: "garden",
        title: "Geniş Balkon & Teras",
        desc: "Şehir manzaralı geniş teraslar ve keyifli akşamlar için balkonlar",
      },
      {
        iconName: "center",
        title: "10 Dk Merkez",
        desc: "Çarşıya, okullara ve alışveriş merkezlerine sadece 10 dakika mesafede",
      },
      {
        iconName: "quality",
        title: "Çevreyoluna Yakın",
        desc: "İstanbul-Edirne otobanına sadece 5 dakika mesafede",
      },
    ],
    images: [
      { src: loftExt1, label: "Dış Görünüm 1", cat: "Dış Görünüm" },
      { src: loftExt2, label: "Dış Görünüm 2", cat: "Dış Görünüm" },
      { src: loftExt3, label: "Dış Görünüm 3", cat: "Dış Görünüm" },
      { src: loftExt4, label: "Dış Görünüm 4", cat: "Dış Görünüm" },
      { src: loftExt5, label: "Dış Görünüm 5", cat: "Dış Görünüm" },
      { src: loftExt6, label: "Dış Görünüm 6", cat: "Dış Görünüm" },
      { src: loftExt7, label: "Dış Görünüm 7", cat: "Dış Görünüm" },
      { src: loftExt8, label: "Dış Görünüm 8", cat: "Dış Görünüm" },
      { src: loftExt9, label: "Dış Görünüm 9", cat: "Dış Görünüm" },
      { src: loftExt10, label: "Dış Görünüm 10", cat: "Dış Görünüm" },
      { src: loftExt11, label: "Dış Görünüm 11", cat: "Dış Görünüm" },
      { src: loftExt12, label: "Dış Görünüm 12", cat: "Dış Görünüm" },
      { src: loftExt13, label: "Dış Görünüm 13", cat: "Dış Görünüm" },
      { src: loftInt1, label: "İç Mekan 1", cat: "İç Mekan" },
      { src: loftInt2, label: "İç Mekan 2", cat: "İç Mekan" },
      { src: loftInt3, label: "İç Mekan 3", cat: "İç Mekan" },
      { src: loftInt4, label: "İç Mekan 4", cat: "İç Mekan" },
      { src: loftInt5, label: "İç Mekan 5", cat: "İç Mekan" },
      { src: loftInt6, label: "İç Mekan 6", cat: "İç Mekan" },
      { src: loftInt7, label: "İç Mekan 7", cat: "İç Mekan" },
      { src: loftInt8, label: "İç Mekan 8", cat: "İç Mekan" },
      { src: loftInt9, label: "İç Mekan 9", cat: "İç Mekan" },
      { src: loftInt10, label: "İç Mekan 10", cat: "İç Mekan" },
      { src: loftInt11, label: "İç Mekan 11", cat: "İç Mekan" },
      { src: loftInt12, label: "İç Mekan 12", cat: "İç Mekan" },
      { src: loftInt13, label: "İç Mekan 13", cat: "İç Mekan" },
      { src: loftInt14, label: "İç Mekan 14", cat: "İç Mekan" },
      { src: loftInt15, label: "İç Mekan 15", cat: "İç Mekan" },
      { src: loftInt16, label: "İç Mekan 16", cat: "İç Mekan" },
      { src: loftInt17, label: "İç Mekan 17", cat: "İç Mekan" },
      { src: loftInt18, label: "İç Mekan 18", cat: "İç Mekan" },
      { src: loftInt19, label: "İç Mekan 19", cat: "İç Mekan" },
      { src: loftInt20, label: "İç Mekan 20", cat: "İç Mekan" },
      { src: loftInt21, label: "İç Mekan 21", cat: "İç Mekan" },
      { src: loftInt22, label: "İç Mekan 22", cat: "İç Mekan" },
      { src: loftInt23, label: "İç Mekan 23", cat: "İç Mekan" },
      { src: loftInt24, label: "İç Mekan 24", cat: "İç Mekan" },
      { src: loftAer1, label: "Hava Çekimi 1", cat: "Hava Çekimi" },
      { src: loftAer2, label: "Hava Çekimi 2", cat: "Hava Çekimi" },
      { src: loftAer3, label: "Hava Çekimi 3", cat: "Hava Çekimi" },

    ],
    videoSrc: loftVideo,
    videoPoster: loftAer1,
    videoDescription: "Yaklaşık 1 dakikalık tanıtım filmimizde proje alanını, daire iç tasarımlarını ve lüks detayları keşfedin.",
    contactText: "Golden Life Villas projesine dair detaylı katalog, fiyat listesi ve örnek daire gösterimi için bizimle hemen iletişime geçin.",
  },
  {
    id: "golden-odris-home",
    name: "Golden Odris Home",
    eyebrow: "— Erkan Çelik İnşaat & GAYRİMENKUL —",
    headline: "Golden Odris Home",
    subHeadline: "Şehrin Kalbinde",
    description: "BABAESKİ'DE MERKEZDE PRESTİJLİ BİR YAŞAM · ÇOK YAKINDA SİZLERLE",
    heroImage: trendComingSoon,
    badge: "Yakında Gelecek",
    location: "Babaeski",
    deliveryYear: "Yakında",
    stats: [],
    features: [],
    images: [],
    contactText: "Ba projemiz hakkında lansman öncesi bilgi almak, ön talep oluşturmak ve detaylı bilgi edinmek için bizimle iletişime geçin.",
    isComingSoon: true,
  },
];
