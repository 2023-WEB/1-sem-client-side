import "@/styles/globals.css";
import "react-modern-drawer/dist/index.css";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />;
    </DefaultLayout>
  );
}
