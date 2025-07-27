import { Button } from "@material-tailwind/react";
import moment from "jalali-moment";
import React, { useEffect, useState } from "react";
import { Dialog, DialogFooter } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { AiOutlineCheckCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { LuClock } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaHourglassStart } from "react-icons/fa";
import { BsCalendar4Week } from "react-icons/bs";

let arrDay = {
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
     <div className="flex  my-4 gap-x-2">
       <div className="text-purple-600 text-xl">{icon}</div>
       <h4 className="text-gray-800 font-semibold text-lg">{title}</h4>
       <p className="text-gray-600 text-base flex-1">{desc}</p>
     </div>
   );
 }
 

export default function DescriptionCourse({ courseInfo }) {
  const [open, setOpen] = React.useState(false);
  const [courseShopping, setCourseShopping] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
const [discountResult, setDiscountResult] = useState(null);
const [checkingDiscount, setCheckingDiscount] = useState(false);
  const { courseName } = useParams();
  let token = localStorage.getItem("accessToken");


  const handleOpen = () => {
    if (token) {
      setOpen(!open);
    } else {
      toast.error("برای خرید دوره لطفا وارد سایت شوید");
    }
  };

  const clickHandlerCourse = async () => {
    if (token) {
      try {
        let res = await fetch(
          `https://helsa-api.liara.run/courses/${courseName}/enroll/`,
          {
            method: "POST",
            headers: { Authorization: `JWT ${token}` },
          }
        );

        if (!res.ok) {
          throw new Error(`Enrollment failed with status ${res.status}`);
        }

        let data = await res.json();
        if (data.authority) {
          localStorage.setItem(`authority_${courseName}`, data.authority);
        }

        setOpen(!open);
        location.href = data.url;

        setReloadKey((prev) => prev + 1);
      } catch (error) {
        toast.error("خطا در ثبت نام دوره");
      }
    }
  };

const checkDiscount = async () => {
  if (!discountCode) return toast.error("لطفاً کد تخفیف را وارد کنید");

  setCheckingDiscount(true);

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
      toast.error("کد تخفیف نامعتبر است.");
      setDiscountResult(null);
    }
  } catch (error) {
    toast.error("خطا در بررسی کد تخفیف");
    setDiscountResult(null);
  } finally {
    setCheckingDiscount(false);
  }
};



  useEffect(() => {
    const fetchData = async () => {
      let authorityKey = localStorage.getItem(`authority_${courseName}`);
      if (!authorityKey) {
        setCourseShopping(false);
        return;
      }

      try {
        const url = `https://helsa-api.liara.run/courses/${courseName}/verify/`;

        let res = await axios.get(url, {
          params: { Authority: authorityKey },
          headers: { Authorization: `JWT ${token}` },
        });

        if (res.status >= 200 && res.status < 300) {
          toast.success(res.data.detail);
          setCourseShopping(true);
        } else {
          setCourseShopping(false);
        }
      } catch (error) {
        toast.error("خطا در بررسی دوره");
        setCourseShopping(false);
      }
    };

    fetchData();
  }, [courseName, token, reloadKey]);

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="md:flex gap-8">
        {/* Course Image */}
        <img
          className="w-full md:w-1/3 max-h-80 object-cover mx-auto md:mx-0 rounded-lg shadow-md"
          src={courseInfo?.photo}
          alt={courseInfo?.title}
        />

        {/* Course Details */}
        <div className="mt-6 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-800">
            {courseInfo.title}
          </h2>
          <ItemBox
            icon={<AiOutlineCheckCircle />}
            title="توضیحات دوره:"
            desc={courseInfo.description}
          />
          <ItemBox
            icon={<LuClock />}
            title="مدت زمان دوره (ساعت):"
            desc={courseInfo.length}
          />
          <ItemBox
            icon={<MdOutlineAttachMoney />}
            title="شهریه:"
            desc={`${courseInfo.price?.toLocaleString()} ریال`}
          />
          <ItemBox
            icon={<BsPersonLinesFill />}
            title="نوع برگزاری:"
            desc={courseInfo.attendance === "I" ? "حضوری" : "آنلاین"}
          />
          <ItemBox
            icon={<FaHourglassStart />}
            title="زمان شروع کلاس:"
            desc={
              courseInfo.starts_at &&
              moment(courseInfo.starts_at, "YYYY/MM/DD")
                .locale("fa")
                .format("YYYY/MM/DD")
            }
          />
          <ItemBox
            icon={<BsCalendar4Week />}
            title="روزهای برگزاری:"
            desc={courseInfo.schedule.map((item, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {arrDay[item.split(" ")[0]]} - {item.split(" ")[1].slice(0, -3)}
              </span>
            ))}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-8">
        {courseShopping ? (
          <div className="text-center">
            <Button className="text-lg text-white bg-green-600 hover:bg-green-700 transition-all px-6 py-2 rounded-lg shadow-md">
              دوره خریداری شده است!
            </Button>
            <p className="mt-3 text-gray-600">
              برای اطلاعات بیشتر تماس بگیرید...
            </p>
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

      {/* Dialog */}
      <Dialog
        open={open}
        className="py-5 px-5 border-2 rounded-lg border-gray-200 shadow-lg"
        size="xs"
        handler={handleOpen}
      >
        <div className="text-center text-2xl font-semibold text-gray-700 mb-8">
          آیا از خرید دوره اطمینان دارید؟
        </div>
       
        <div className="mb-6 text-center">
          <p className="text-gray-600 mb-2">کد تخفیف دارید؟</p>
          <input
            type="text"
            className="border px-4 py-2 rounded-lg w-full"
            placeholder="کد تخفیف را وارد کنید"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <Button
            className="mt-3 bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg"
            onClick={checkDiscount}
            disabled={checkingDiscount}
          >
            {checkingDiscount ? "در حال بررسی..." : "اعمال کد تخفیف"}
          </Button>
          {discountResult && (
            <div className="mt-4 text-green-600">
              ✅ {discountResult?.message || "تخفیف با موفقیت اعمال شد!"}
            </div>
          )}
        </div>




        <DialogFooter className="flex justify-center">
          <Button
            onClick={clickHandlerCourse}
            className="mr-2 px-10 py-2 text-lg  font-bold bg-white text-blue-400 border border-blue-400 hover:bg-blue-gray-600 hover:text-white rounded-lg"
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
