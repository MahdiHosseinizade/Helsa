import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DescriptionCourse from "../../SectionPage/DetailCourse/DescriptionCourse";
import SectionCourse from "../../SectionPage/DetailCourse/SectionCourse";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

export default function DetailCourse() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const { courseName } = useParams();

  useEffect(() => {
    let cancelled = false; 

    const fetchCourse = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("accessToken");
        const headers = token ? { Authorization: `JWT ${token}` } : {};
        const url = `https://helsa-api.liara.run/courses/${courseName}/`;

        const response = await axios.get(url, {
          headers,
        });


        const resData = response?.data;
        if (!cancelled) {
          setData(Array.isArray(resData) ? resData : resData ? [resData] : []);
        }
      } catch (err) {
        console.error("fetchCourse error:", err);
        if (!cancelled) {
          setError(err);
          setData([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCourse();

    return () => {
      cancelled = true;
    };
  }, [courseName]);

  if (loading) return <Loader />;

  return (
    <div>
      <Header />
      <div className="container relative min-h-screen grid grid-cols-1 md:grid-cols-3 overflow-hidden">
        {error ? (
          <div className="absolute inset-0 m-auto size-max text-red-500 text-xl">
            خطا در دریافت دوره .
          </div>
        ) : data.length > 0 ? (
          <div className="md:col-span-4 py-10">
            <DescriptionCourse courseInfo={data[0]} />
            <SectionCourse data={data[0]} />
          </div>
        ) : (
          <div className="absolute inset-0 m-auto size-max text-gray-600 text-xl">دوره‌ای یافت نشد...</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
