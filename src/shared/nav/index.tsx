import { ResponsiveElement } from "@/utils/responsive-element";
import NavDesktop from "./desktop";
import NavMobile from "./mobile";

export default () => {
  return (
    <ResponsiveElement
      breakpoints={{ isMobileOrTabletVertical: <NavMobile /> }}
      content={<NavDesktop />}
    />
  );
};
