import { useLocation } from "react-router-dom";

// urls
export const mainUrl = "https://api.ilmfelagi.com/api/v1"
// export const mainUrl = "https://www.ilmfelagi.com/api/v1";
// export const mainUrl = "http://localhost:3000/api/v1";

export const courseUrl = `${mainUrl}/courses`;
export const categoryUrl = `${mainUrl}/categories`;
export const ustazUrl = `${mainUrl}/ustazs`;
export const faqUrl = `${mainUrl}/faq`;
// result urls
export const courseByCategoryUrl = `${courseUrl}/category`;
export const courseByUstazUrl = `${courseUrl}/ustaz`;
export const courseByTitleUrl = `${courseUrl}/title`;

// glabal constants
export const PAGE_SIZE = 20;

export const useUrl = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

export const aboutUsMsg = `
ይህ የሞባይል መተግበሪያ፦
  - ከ40 በላይ የሱና ኡስታዞችን ደርሶች፣
  - ዘርፈ ብዙ ፈኖችን: የዐቂዳ፣ የተውሒድ፣ የመንሀጅ፣ የተፍሲር፣ የሲራ፣ የአደብ፣ የተርቢያ፣ የሐዲሥ፣ የፊቅህ፣ የነሕው፣ የሶርፍ እና የተጅዊድ ኪታቦችን፣
  - እያንዳንዱ የድምፅ ቅጂ ከሶፍት ኮፒ ጋር
  - ከ150 በላይ የኪታብ ቅጅዎችን፣ በአንድ ላይ አካቶ ይዟል።

አፑን ለአጠቃቀም ምቹ ከሚያደርጉት ነገራቶች፦
  - የፈለጉትን ደርስ በቀላሉ ለማግኘት ምልክት ማድረግ የሚያስችል፣
  - ከቅጅዎቹ መካከል መርጠው ለሌሎች ማጋራት የሚያስችል፣
  - ለእይታ አመቺ ይሆን ዘንድ የቀንና የማታ ገፅታ ያካተተ፣
  - የፅሁፍ መጠን መጨመርና መቀነስ የሚያስችል፣
  - የፈለጉትን ደርስ ‘ሰርች’ ማድረጊያ ያለው፣
  - የጀማሪ ኪታቦችን ለብቻ የሚያሳይ፣
  - የደርስ ሰአት እና ቀን አስታዋሽ (alarm) ያለው፣
  - ደርሱን አቋርጠን በሌላ ጊዜ ማዳመጥ ብንፈልግ ካቆመበት የሚጀምር፣
  - አድስ ደርስ ሲጫን መልእክት የሚቀበል ነው።

በመጨረሻም፦
  ይህ ስራችን የላቀው አላህን ፊት ብቻ ተፈልጎበት የተሰራ እንዲሆን፣ ደርሶችን ከተለያዩ የቴሌግራም ቻናሎች ላሰባሰበው፣ አፑን ላዘጋጀው፣ በዚህ ስራ ለተባበሩ፣ ይህንን ስራ ለሚያሰራጩትም፣ ለሁላችንም - አላህ: "ከኋለኞቹ ህዝቦች ዘንድ መልካም ዝናን እንዲያደርግልን" እማፀነዋለሁ። ረበና ተቀበል ሚና!!
`;