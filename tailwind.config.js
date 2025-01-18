import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      screens: {
         sm: "640px",
         md: "870px",
         lg: "1080px",
         xl: "1020px",
         "2xl": "1140px",
      },
      container: {
         center: true,
      },
      extend: {
         colors: {
            blueGray: "#030929",
            "blue-gray-550": "#19184F",
            "blue-gray-750": "#000080",
            pink: "#DB0EB7",
            primary: "#286bb8",
         },
         borderWidth: {
            3: "3px",
         },
      },
   },
   plugins: [],
});
