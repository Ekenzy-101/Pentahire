import HCaptcha from "@hcaptcha/react-hcaptcha";

interface Props {
  onError?: (error: string) => any;
  onExpire?: () => any;
  onVerify?: (token: string) => any;
  ref: React.RefObject<any>;
  sitekey: string;
  theme?: "light" | "dark";
}

const Captcha: React.FC<Props> = ({
  onError,
  onExpire,
  onVerify,
  sitekey,
  ref,
  theme,
}) => {
  return (
    <HCaptcha
      ref={ref}
      sitekey={sitekey}
      size="invisible"
      onError={onError}
      onExpire={onExpire}
      onVerify={onVerify}
      theme={theme}
    />
  );
};

export default Captcha;
