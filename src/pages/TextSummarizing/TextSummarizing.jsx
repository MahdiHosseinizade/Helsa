import { useRef, useState } from "react";
import axios from "axios"; 
import {toast} from "react-hot-toast";
import BtnInfo from "../../components/common/btnInfo";
import BtnSuccess from "../../components/common/btnSuccess";
import Textarea from "../../components/common/textarea";
import Header from "../../components/Header/Header";

const TextSumm = () => {
  const textareaRef = useRef(null);
  const [summary, setSummary] = useState("");
  let token = localStorage.getItem("accessToken");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const value = textareaRef.current.value.trim();

    if (value === "") {
        return toast.error("لطفا مقداری وارد کنید!"); 
    }

    try {
        const response = await axios.post("https://helsai-summarizer.liara.run/summarize/", {
            text: value, 
        });

        if (response.status >= 200 && response.status < 300) {
            if (response.data && response.data.summary) {
                const textData = response.data.summary.map(item => item[1]).join("\n");
                setSummary(textData); 
                toast.success("خلاصه با موفقیت ایجاد شد!"); 
            } else {
                throw new Error("پاسخ نامعتبر از سرور");
            }
        } else {
            throw new Error("خطا در پاسخ به API");
        }
    } catch (error) {
        console.error(error);
        toast.error("خطا در ارسال یا دریافت پاسخ"); 
    }
};

  return (
    <section>
      <Header />
      <form className="m-6" onSubmit={handleSubmit}>
        <div className="w-full block md:flex max-h-60">
          <Textarea ref={textareaRef} className="" />
          <div className="md:w-1/3 text-right md:pr-10">
            <h3 className="font-bold">خلاصه متن:</h3>
            <p className="mb-4 mt-2 border-2 border-purple-300 min-h-32 h-full rounded p-5">
              {summary || "هنوز متنی خلاصه نشده است"}
            </p>
          </div>
        </div>

        <div className="mt-14">
          <BtnSuccess Tag="button">ارسال</BtnSuccess>
          <BtnInfo Tag="button" type="reset" onClick={() => setSummary("")}>شروع مجدد</BtnInfo>
        </div>
      </form>

    </section>
  );
};

export default TextSumm;
