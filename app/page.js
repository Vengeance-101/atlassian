import Banner from "@/components/banner/Banner";
import Collabrate from "@/components/collabrate/Collabrate";
import Header from "@/components/header/Header";
import PowerFull from "@/components/powerful/PowerFull";
export default function Home() {
  return (
    <div className="font-charlie">
      <Header></Header>
      <Banner />
      <PowerFull />
      <Collabrate />
    </div>
  );
}
