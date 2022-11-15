import {
  AdjustmentsIcon,
  ArchiveIcon,
  DesktopComputerIcon,
  DownloadIcon,
  LightBulbIcon,
  QuestionMarkCircleIcon,
  ServerIcon,
} from "@heroicons/react/outline";
import { DetailedFeatureLink } from "./Feature";
import { CSSIcon, JSIcon, TSIcon } from "./Icons";

export const TurbopackFeatures = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: JSIcon,
          description: `支持 ESNext 所有功能、Browserslist 和 top-level await。`,
          name: "JavaScript",
        }}
        href="/pack/docs/features/javascript"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: TSIcon,
          description: (
            <p>
             TypeScript 开箱即用，包括 <code>paths</code> and <code>baseUrl</code> 解析。
            </p>
          ),
          name: "TypeScript",
        }}
        href="/pack/docs/features/typescript"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: DownloadIcon,
          description: (
            <p>
              支持 <code>require</code>、<code>import</code>、动态导入等。 
            </p>
          ),
          name: "模块导入",
        }}
        href="/pack/docs/features/imports"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: DesktopComputerIcon,
          description: `经过优化的开发服务器支持热模块重载（HMR） 和快速刷新。`,
          name: "开发服务器",
        }}
        href="/pack/docs/features/dev-server"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: CSSIcon,
          description: (
            <p>
              支持全局 CSS,、CSS Modules、<code>@import</code>，并内置了 PostCSS。
            </p>
          ),
          name: "CSS",
        }}
        href="/pack/docs/features/css"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: ArchiveIcon,
          description: (
            <p>
              了解关于 Next.js、 Svelte、Vue 和 React 服务端组件相关支持。
            </p>
          ),
          name: "框架",
        }}
        href="/pack/docs/features/frameworks"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: (
            <p>
              支持 <code>/public</code> 目录、JSON 导入，以及使用 ESM 导入静态资源。
            </p>
          ),
          name: "静态资源",
        }}
        href="/pack/docs/features/static-assets"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: AdjustmentsIcon,
          description: (
            <p>
              支持通过 <code>.env</code>、<code>.env.local</code> 等配置环境变量。
            </p>
          ),
          name: "环境变量",
        }}
        href="/pack/docs/features/environment-variables"
      ></DetailedFeatureLink>
    </div>
  );
};
