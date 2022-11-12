import { PACK_HOME_FEATURES } from "../../../content/features";
import { FeaturesBento } from "../home-shared/FeaturesBento";

export function PackFeatures() {
  return (
    <FeaturesBento
      header="Why Turbopack?"
      body="Turbo 拥有递增式和自适应的构建策略，可以让任意规模的项目获得更快更灵活的开发体验"
      features={PACK_HOME_FEATURES}
    />
  );
}

