import { GetServerSideProps } from "next";
import { parse } from "next-useragent";
import DesktopTimelinePage from "@/app/desktop/timeline/page";
import MobileTimelinePage from "@/app/mobile/timeline/page";

interface TimelinePageProps {
  isMobile: boolean;
}

const TimelinePage: React.FC<TimelinePageProps> = ({ isMobile }) => {
  return isMobile ? <MobileTimelinePage /> : <DesktopTimelinePage />;
};

export default TimelinePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userAgent = context.req.headers["user-agent"] || "";
  const ua = parse(userAgent);
  const isMobile = ua.isMobile;

  return {
    props: {
      isMobile,
    },
  };
};
