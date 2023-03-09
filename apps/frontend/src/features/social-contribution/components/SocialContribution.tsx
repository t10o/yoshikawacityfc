import { ScrollAnimation } from "@/components/Elements";

export const SocialContribution = (): JSX.Element => {
  return (
    <div className="max-w-[1000px] m-auto relative">
      <ScrollAnimation
        origin="bottom"
        distance="400px"
        opacity={0}
        duration={800}
        viewFactor={0.3}
        easing="ease-out"
        className="mb-16 px-4 md:mb-0 md:w-1/2 md:ml-[50%] md:absolute md:top-[45%] md:z-10"
      >
        <h2 className="font-semibold text-6xl mb-24">社会貢献活動</h2>

        <h3 className="font-medium text-2xl mb-6">”次世代のために”</h3>
        <p className="font-medium mb-14">
          将来を担う子ども達が健全に成長出来る場・機会を提供します。
        </p>

        <h3 className="font-medium text-2xl mb-6">”地域と共に”</h3>
        <p className="font-medium mb-14">地域の美化活動を行います</p>

        <h3 className="font-medium text-2xl mb-6">
          ”誰もがフットボールに親しむ”
        </h3>
        <p className="font-medium">
          障がい・年齢・性別・LGBTQなどすべての壁を取り払い「誰もがありのままに、自分らしく」心からスポーツを楽しみ、誰も排除しない”多様性”触れる機会をつくります。
        </p>
      </ScrollAnimation>

      <ScrollAnimation
        origin="top"
        distance="400px"
        opacity={0}
        duration={800}
        viewFactor={0.3}
        easing="ease-out"
      >
        <img
          src="/social-contribution.jpg"
          alt="social-contribution"
          className="w-full md:w-2/3 scale-y-[1] scale-x-[-1]"
        />
      </ScrollAnimation>
    </div>
  );
};