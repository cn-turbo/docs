/* eslint-disable react/no-unescaped-entities */
import { Container } from "../Container";
import { Clients } from "../clients/Clients";

export default function Showcase() {
  return (
    <main className="relative">
      <div className="mx-auto">
        <div className="py-16 lg:text-center">
          <p className="text-base font-semibold leading-6 tracking-wide text-blue-600 uppercase dark:text-gray-400 font-space-grotesk">
            案例
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 md:text-5xl dark:text-white sm:text-4xl sm:leading-10">
            谁在使用 Turbo ？
          </h1>
          <p className="max-w-3xl mt-4 text-xl leading-7 text-gray-500 dark:text-gray-400 lg:mx-auto font-space-grotesk">
            Turbo
            是前端生态中发展最快的工具链之一。它深受成千上万开发者信任投入于生产构建，其中包括来自
            Vercel、AWS、Netflix、Microsoft、Disney 等团队。
          </p>
        </div>
      </div>

      <div className="grid items-center grid-cols-3 gap-16 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 ">
        <Clients linked />
      </div>
      <Container>
        <div className="max-w-xl pt-20 pb-24 mx-auto space-y-6 text-center">
          <div className="mt-2 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-10">
            你也在使用 Turbo？
          </div>
          <div className="mx-auto rounded-md">
            <a
              href="https://github.com/vercel/turbo/edit/main/docs/components/clients/users.ts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-auto px-8 py-3 text-base font-medium text-white no-underline bg-black border border-transparent rounded-md dark:bg-white dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6"
            >
              快来展示贵司
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
