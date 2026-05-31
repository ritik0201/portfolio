"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";



export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-0 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        <span className="text-yellow-400">Ritik </span> Kumar <br />
        <span className="text-fuchsia-500">Full Stack</span> Developer
      </h1>
      <p className="max-w-3xl text-sm md:text-base mt-4 font-semibold text-neutral-400 tracking-wide">
        React · TypeScript · Node.js · PostgreSQL
      </p>
      <div className="max-w-2xl text-base md:text-xl mt-6 dark:text-neutral-200">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base text-neutral-300">
          <a href="mailto:ritikkvs2177@gmail.com" className="hover:text-yellow-400 transition-colors">📧 ritikkvs2177@gmail.com</a>
          <span className="text-neutral-600">|</span>
          <a href="tel:+919555503658" className="hover:text-yellow-400 transition-colors">📞 +91-9555503658</a>
          <span className="text-neutral-600">|</span>
          <a href="https://github.com/ritik0201" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">💻 GitHub</a>
          <span className="text-neutral-600">|</span>
          <a href="https://www.linkedin.com/in/ritik-kumar-058694318/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">🔗 LinkedIn</a>
        </div>
        <p className="text-xs md:text-sm text-neutral-400 mt-2">
          📍 Prayagraj, UP, India (Open to Remote / Relocation)
        </p>
        <div className="mt-8 flex flex-col gap-y-2 max-w-5xl">
          <span className="text-2xl font-bold text-gray-50">🧑‍💼 Professional Summary</span>
          <span className="text-neutral-300 text-sm md:text-base leading-relaxed text-justify">
            Full Stack Developer with production experience in React, TypeScript, Node.js/Express, and MongoDB, currently expanding into PostgreSQL. Shipped two live platforms (99.9% uptime), built complete auth flows with RBAC, and integrated third-party payment gateways. Comfortable owning features end-to-end — from schema design to UI — and navigating a codebase without hand-holding. Eager to join a small team, take on varied work, and be on-call when things break.
          </span>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
