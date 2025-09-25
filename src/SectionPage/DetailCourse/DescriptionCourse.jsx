import { Button, Dialog, DialogFooter } from "@material-tailwind/react";
import moment from "jalali-moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import {
  AiOutlineCheckCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { LuClock } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsPersonLinesFill, BsCalendar4Week } from "react-icons/bs";
import { FaHourglassStart } from "react-icons/fa";

const arrDay = {
  sat: "شنبه",
  sun: "یکشنبه",
  mon: "دوشنبه",
  tue: "سه‌شنبه",
  wed: "چهارشنبه",
  thu: "پنج‌شنبه",
  fri: "جمعه",
};

function ItemBox({ icon, title, desc }) {
  return (
    <div className="flex my-4 gap-x-2">
      <div className="text-purple-600 text-xl">{icon}</div>
      <h4 className="text-gray-800 font-semibold text-lg">{title}</h4>
      <p className="text-gray-600 text-base flex-1">{desc}</p>
    </div>
  );
}

export default function DescriptionCourse({ courseInfo }) {
  const [open, setOpen] = useState(false);
  const [courseShopping, setCourseShopping] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [discountResult, setDiscountResult] = useState(null);
  const [discountError, setDiscountError] = useState(null);
  const [checkingDiscount, setCheckingDiscount] = useState(false);

  const { courseName } = useParams();
  const token = localStorage.getItem("accessToken");

  const SPECIAL_COURSE_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSf_03MTgZbFFwzylpKR9n4C1HOi4wETXpfjFm-3E0wlW6gxow/viewform";

  const handleOpen = () => {

    if (!token) {
      return toast.error("برای خرید دوره لطفا وارد سایت شوید");
    }

    if (courseName === "23" || Number(courseName) === 23) {
      window.location.href = SPECIAL_COURSE_LINK;
      return;
    }

    setOpen((prev) => !prev);
  };

  const clickHandlerCourse = async () => {
    if (!token) {
      return;
    }

    try {
      const url = discountCode
        ? `https://helsa-api.liara.run/courses/${courseName}/enroll/?discount_code=${encodeURIComponent(
            discountCode
          )}`
        : `https://helsa-api.liara.run/courses/${courseName}/enroll/`;


      const res = await fetch(url, {
        method: "POST",
        headers: { Authorization: `JWT ${token}` },
      });


      if (!res.ok) throw new Error(`Enrollment failed with status ${res.status}`);

      const data = await res.json();
      if (data.authority) {
        localStorage.setItem(`authority_${courseName}`, data.authority);
      }

      setOpen(false);

      if (data.url) {
        window.location.href = data.url;
      }

      setReloadKey((prev) => prev + 1);
    } catch (error) {
      toast.error("خطا در ثبت نام دوره");
    }
  };

  const checkDiscount = async () => {
    if (!discountCode) return toast.error("لطفاً کد تخفیف را وارد کنید");

    setCheckingDiscount(true);
    setDiscountResult(null);
    setDiscountError(null);

    try {
      const res = await axios.get(
        `https://helsa-api.liara.run/courses/${courseName}/check_discount`,
        {
          params: { discount_code: discountCode },
          headers: { Authorization: `JWT ${token}` },
        }
      );


      if (res.status >= 200 && res.status < 300) {
        setDiscountResult(res.data);
        toast.success("کد تخفیف معتبر است!");
      } else {
        setDiscountError("کد تخفیف نامعتبر است.");
      }
    } catch (error) {
      console.error("checkDiscount error:", error);
      setDiscountError("خطا در بررسی کد تخفیف");
    } finally {
      setCheckingDiscount(false);
    }
  };

  useEffect(() => {
    const verifyCourse = async () => {
      const authorityKey = localStorage.getItem(`authority_${courseName}`);
      if (!authorityKey) return setCourseShopping(false);

      try {
        const res = await axios.get(
          `https://helsa-api.liara.run/courses/${courseName}/verify/`,
          {
            params: { Authority: authorityKey },
            headers: { Authorization: `JWT ${token}` },
          }
        );


        if (res.status >= 200 && res.status < 300) {
          toast.success(res.data.detail);
          setCourseShopping(true);
        } else {
          setCourseShopping(false);
        }
      } catch (err) {
        console.error("verifyCourse error:", err);
        toast.error("خطا در بررسی دوره");
        setCourseShopping(false);
      }
    };

    verifyCourse();
  }, [courseName, token, reloadKey]);

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="md:flex gap-8">
        <img
          className="w-full md:w-1/3 max-h-80 object-cover mx-auto md:mx-0 rounded-lg shadow-md"
          src={courseInfo?.photo}
          alt={courseInfo?.title}
        />

        <div className="mt-6 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-800">{courseInfo.title}</h2>

          <ItemBox icon={<AiOutlineCheckCircle />} title="توضیحات دوره:" desc={courseInfo.description} />
          <ItemBox icon={<LuClock />} title="مدت زمان دوره (ساعت):" desc={courseInfo.length} />

          <ItemBox
            icon={<MdOutlineAttachMoney />}
            title="شهریه:"
            desc={
              <div className="flex items-baseline gap-2">
                {discountResult?.new_price ? (
                  <>
                    <span className="line-through text-gray-400 text-lg">
                      {courseInfo.price?.toLocaleString()} ریال
                    </span>
                    <span className="text-green-600 font-bold text-xl">
                      {discountResult.new_price.toLocaleString()} ریال
                    </span>
                  </>
                ) : (
                  <span className="text-lg">{courseInfo.price?.toLocaleString()} ریال</span>
                )}
              </div>
            }
          />

          <ItemBox
            desc={
              <>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    className="border px-4 py-2 rounded-lg text-sm w-48"
                    placeholder="کد تخفیف ..."
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                  <Button
                    size="sm"
                    className="bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded-lg"
                    onClick={checkDiscount}
                    disabled={checkingDiscount}
                  >
                    {checkingDiscount ? "در حال بررسی..." : "اعمال کد"}
                  </Button>
                </div>

                {discountResult && (
                  <div className="text-green-600 text-sm mt-2">
                    ✅ {discountResult?.detail || "تخفیف با موفقیت اعمال شد!"}
                  </div>
                )}
                {discountError && (
                  <div className="text-red-500 text-sm mt-2">❌ {discountError}</div>
                )}
              </>
            }
          />

          <ItemBox icon={<BsPersonLinesFill />} title="نوع برگزاری:" desc={courseInfo.attendance === "I" ? "حضوری" : "آنلاین"} />
          <ItemBox
            icon={<FaHourglassStart />}
            title="زمان شروع کلاس:"
            desc={
              courseInfo.starts_at &&
              moment(courseInfo.starts_at, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")
            }
          />
          <ItemBox
            icon={<BsCalendar4Week />}
            title="روزهای برگزاری:"
            desc={
              courseInfo.schedule?.map((item, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  {arrDay[item.split(" ")[0]]} - {item.split(" ")[1].slice(0, -3)}
                </span>
              ))
            }
          />
        </div>
      </div>

      <div className="flex justify-end mt-8">
        {courseShopping ? (
          <div className="text-center">
            <Button className="text-lg text-white bg-green-600 hover:bg-green-700 transition-all px-6 py-2 rounded-lg shadow-md">
              دوره خریداری شده است!
            </Button>
            <p className="mt-3 text-gray-600">برای اطلاعات بیشتر تماس بگیرید...</p>
          </div>
        ) : (
          <Button
            onClick={handleOpen}
            className="flex items-center gap-2 text-lg w-40 h-12 text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all px-6 py-2 rounded-lg shadow-md"
          >
            <AiOutlineShoppingCart className="font-bold" />
            ثبت نام
          </Button>
        )}
      </div>

      <Dialog
        open={open}
        className="py-5 px-5 border-2 rounded-lg border-gray-200 shadow-lg"
        size="xs"
        handler={handleOpen}
      >
        <div className="text-center text-2xl font-semibold text-gray-700 mb-8">
          آیا از خرید دوره اطمینان دارید؟
        </div>

        <DialogFooter className="flex justify-center">
          <Button
            onClick={clickHandlerCourse}
            className="mr-2 px-10 py-2 text-lg font-bold bg-white text-blue-400 border border-blue-400 hover:bg-blue-gray-600 hover:text-white rounded-lg"
          >
            بله
          </Button>
          <Button
            onClick={handleOpen}
            className="mr-2 text-lg px-8 py-2 font-thin bg-white text-red-400 border border-red-400 rounded-lg"
          >
            بستن
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
