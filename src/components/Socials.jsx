import { FaTwitter, FaTumblr } from "react-icons/fa";

const Socials = () => {
  return (
    <div>
      <a
        id="tweet-quote"
        title="Tweet this quote!"
        target="_top"
        href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22People%20often%20say%20that%20motivation%20doesn%E2%80%99t%20last.%20Well%2C%20neither%20does%20bathing.%20%20That%E2%80%99s%20why%20we%20recommend%20it%20daily.%22%20Zig%20Ziglar"
      >
        <i>
          <FaTwitter size={20} />
        </i>
      </a>
      <a
        id="tumblr"
        title="Post this to tumblr!"
        target="_top"
        href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DZig%2BZiglar%26content%3DPeople%2Boften%2Bsay%2Bthat%2Bmotivation%2Bdoesn%25E2%2580%2599t%2Blast.%2BWell%252C%2Bneither%2Bdoes%2Bbathing.%2B%2BThat%25E2%2580%2599s%2Bwhy%2Bwe%2Brecommend%2Bit%2Bdaily.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
      >
        <i>
          <FaTumblr size={20} />
        </i>
      </a>
    </div>
  );
};

export default Socials;
