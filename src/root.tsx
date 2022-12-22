// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import gridCSS from "./css/mainGrid.module.css";
import "./css/fonts.css";
export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>OtterBots Stats</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
              <div class={gridCSS.parent}>
                <div class={gridCSS.div1}>
                  <h1>Otter Bots</h1>
                </div>
                <div class={gridCSS.div3}>
                  <h1>Stats</h1>
                </div>
                <div class={gridCSS.div4}>
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </div>
                <div class={gridCSS.div5}>
                  <p>&copy; Otter Bots 2022</p>
                </div>
              </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
