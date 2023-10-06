import { Typography, useTheme } from "@mui/material";
import FlexBetween from "@components/FlexBetween";
import WidgetWrapper from "@components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Anime of the Week
        </Typography>
        <Typography color={medium}>view on MAL</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="anime of week"
        src="assets/aow.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Mushoku Tensei: Jobless Reincarnation S2</Typography>
        <Typography color={medium}></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      When a wayward man is reincarnated with the knowledge, experience, and regrets from his previous life, he resolves to become successful in his new body.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;