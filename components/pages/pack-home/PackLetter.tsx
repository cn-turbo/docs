import { HeroText } from "../home-shared/Headings";
import Image from "next/future/image";
import cn from "classnames";
import gradients from "../home-shared/gradients.module.css";
import { FadeIn } from "../home-shared/FadeIn";
import { CTAButton } from "../home-shared/CTAButton";
import Link from "next/link";
import { Gradient } from "../home-shared/Gradient";

export function PackLetter() {
  return (
    <section className="relative flex flex-col items-center px-6 py-16 font-sans md:py-24 lg:py-32 gap-14">
      <FadeIn>
        <HeroText>
          一起推动 Web 发展<br />更进一步
        </HeroText>
      </FadeIn>
      <div className="flex flex-col max-w-xl leading-6 md:text-lg lg:text-lg">
        <FadeIn className="opacity-70">
          <p>
            整个 Web 生态系统的编译设施该有个新的开始了。Webpack 已经被下载了超过 30 亿次，它已成为整个 Web 不可缺少的一个构建工具。
            但就像 Babel 和 Terser 一样，是时候全部转为原生开发了。我加入了 Versel 并组建了一个拥有世界级工程师的团队，共同构建下一代 Web 构建工具。
          </p>
          <br />
          <p>
            这个团队吸取了 Webpack 十年来的教训，结合 Turporepo 和 Google&apos;s Bazel 的递增式计算，发明了为下一个十年打造的构建架构。
          </p>
          <br />
          <p>
            凭借这个架构，我们激动地带来了由 Rust 驱动的 Webpack 接班人 —— Turpopack。它将利用构建系统 Turborepo 的能力，带来强劲的性能提升。
            Turbopack 是开源的高性能、原生构建工具的新基石，我们很高兴与你一起分享它。
          </p>
        </FadeIn>
        <FadeIn
          noVertical
          viewTriggerOffset
          className="relative h-2 md:h-12 lg:h-12"
        >
          <span
            className={cn(
              "w-full h-[1px] -bottom-8 md:-bottom-4 lg:-bottom-4 absolute",
              gradients.letterLine
            )}
          />
        </FadeIn>
        <FadeIn
          viewTriggerOffset
          noVertical
          className="flex items-end justify-center gap-3 md:self-start md:-ml-4 lg:self-start lg:-ml-4 min-w-[300px]"
        >
          <div className="w-24 h-24 min-w-[96px] min-h-[96px] rounded-full border dark:border-white/10 border-black/10 flex items-center justify-center ">
            <Image
              alt="Image of Tobias Koopers"
              src="/images/people/tobias.jpg"
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-3 pb-2">
            <Image
              alt="Tobias Koppers hand written signature"
              src="/images/docs/pack/tobias-signature-light.svg"
              // 16 px added and offset to account for the glow
              width={173 + 16}
              height={91 + 16}
              className="block -mb-3 -ml-3 dark:hidden"
            />
            <Image
              alt="Tobias Koppers hand written signature"
              src="/images/docs/pack/tobias-signature-dark.svg"
              // 16 px added and offset to account for the glow
              width={173 + 16}
              height={91 + 16}
              className="hidden -mb-3 -ml-3 dark:block"
            />
            <div className="flex gap-2 flex-wrap text-sm leading-none text-[#888888] max-w-[156px] md:max-w-xl lg:max-w-xl">
              <p className="font-bold">Tobias Koppers</p>
              <p>Webpack 创造者</p>
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn noVertical className="relative flex justify-center w-full mt-16">
        <div className="max-w-[180px] w-full">
          <CTAButton>
            <Link href="/pack/docs">
              <a className="block py-3 font-sans">开始构建</a>
            </Link>
          </CTAButton>
        </div>
        <Gradient
          width={1200}
          height={300}
          className="bottom-[-200px] -z-10 opacity-20"
          conic
        />
      </FadeIn>
    </section>
  );
}
