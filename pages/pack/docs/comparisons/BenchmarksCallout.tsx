import Link from "next/link";
import Callout from "../../../../components/Callout";

export default function BenchmarksCallout() {
  return (
    <Callout type="info">
      若要了解更多关于 Turbopack 的性能对比与测试方法，您可查阅
      <Link href="../benchmarks">
        <a className="nx-underline">性能测试</a>
      </Link>
      章节。
    </Callout>
  );
}
