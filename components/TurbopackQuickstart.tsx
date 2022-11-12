import {
  LightBulbIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import { DetailedFeatureLink } from "./Feature";

export const TurbopackQuickstartArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: QuestionMarkCircleIcon,
          description: `了解为何我们打造了 Turbopack，以及为何它是 Web 构建生态的未来。`,
          name: "Why Turbopack?",
        }}
        href="/pack/docs/why-turbopack"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: LightBulbIcon,
          description: `了解关于提升 Turbopack 性能背后的创新性结构。`,
          name: "Core Concepts",
        }}
        href="/pack/docs/core-concepts"
      ></DetailedFeatureLink>
    </div>
  );
};
