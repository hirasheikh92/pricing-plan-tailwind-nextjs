"use client";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { FaCheck } from "react-icons/fa";

// Define TypeScript types for frequency and tier
type Frequency = {
  value: string;
  label: string;
  priceSuffix: string;
};

type Tier = {
  id: string;
  name: string;
  href: string;
  price: { [key: string]: string };
  description: string;
  features: string[];
  mostPopular: boolean;
};
const pricing = {
  frequencies: [
    {
      value: "monthly",
      label: "Monthly",
      priceSuffix: "/month",
    },
    {
      value: "yearly",
      label: "Yearly",
      priceSuffix: "/year",
    },
  ],
  tiers: [
    {
      id: "tier-freelancer",
      name: "Freelancers",
      href: "#",
      price: { monthly: "$15", yearly: "$120" },
      description: "For most businesses that want to optimize web traffic.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      mostPopular: false,
    },
    {
      id: "tier-startup",
      name: "Startup",
      href: "#",
      price: { monthly: "$30", yearly: "$287" },
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      mostPopular: true,
    },
    {
      id: "tier-enterprise",
      name: "Enterprise",
      href: "#",
      price: { monthly: "$150", yearly: "$576" },
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour dedicated support response time",
        "Marketing automations",
        "Custom reporting tools",
      ],
      mostPopular: false,
    },
  ],
};
const Pricing = () => {
  // Define pricing object

  const [frequency, setFrequency] = useState<Frequency>(pricing.frequencies[0]);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section className="max-w-screen-xl mx-auto px-6 lg:px-8 ">
      {/* Text */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-base font-semibold leading-7 text-indigo-400">
          Pricing
        </h1>
        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Pricing plans for teams of all sizes
        </p>
      </div>
      <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300 text-center">
        Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi
        iusto modi velit ut non voluptas in. Explicabo id ut laborum.
      </p>

      {/* ButtonPart */}
      <div className="mt-16 flex justify-center">
        <RadioGroup
          value={frequency}
          onChange={setFrequency}
          className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 text-center text-sm font-semibold leading-5 text-white"
        >
          <RadioGroup.Label className="sr-only">
            Payment frequency
          </RadioGroup.Label>
          {pricing.frequencies.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option}
              className={({ checked }) =>
                classNames(
                  checked ? "bg-indigo-500" : "",
                  "cursor-pointer rounded-full px-2.5 py-1"
                )
              }
            >
              {option.label}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
      {/* plainpart */}
      <div className="mx-auto isolate mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none  lg:grid-cols-3">
        {pricing.tiers.map((item) => (
          <div
            key={item.id}
            className={classNames(
              item.mostPopular
                ? "ring-2 ring-indigo-500"
                : "ring-1 ring-white/10",
              "rounded-3xl px-8 p-10"
            )}
          >
            <div className="flex items-center justify-between gap-x-4">
              <h2 className="text-lg font-semibold leading-8 text-white">
                {item.name}
              </h2>
              {item.mostPopular && (
                <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                  most popular
                </p>
              )}
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              {item.description}
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">
                {frequency.value === "monthly"
                  ? item.price.monthly
                  : item.price.yearly}
              </span>
              <span className="text-sm font-semibold leading-6 text-gray-300">
                {frequency.priceSuffix}
              </span>
            </p>
            <button
              className={classNames(
                item.mostPopular
                  ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible::outline-indigo-500"
                  : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none",
                "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:offset-2 w-full"
              )}
            >
              Buy Plan
            </button>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-100 xl:m-10">
              {item.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <FaCheck className="h-6 w-5 text-white" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
