import Image from "next/image";
import MainBanner from "./MainBanner";
import StoryBanner from "./OurStory";
import UserControl from "./UserControl";
import Transforming from "./Transforming";
import Celebrate from "./Celebrate";

export default function Home() {
  return (
    <main>
      <MainBanner></MainBanner>
      <StoryBanner></StoryBanner>
      <UserControl></UserControl>
      <Transforming></Transforming>
      <Celebrate></Celebrate>
    </main>
  );
}
