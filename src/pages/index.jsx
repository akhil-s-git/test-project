
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import {  IoMdClose } from "react-icons/io";
import Products from "./Products";

const filters = [
  {
    id: "brand",
    name: "Brand",
    options: [
      {
        value: "almay",
        label: "Almay",
      },
      {
        value: "alva",
        label: "Alva",
      },
      {
        value: "anna sui",
        label: "Anna sui",
      },
      {
        value: "annabelle",
        label: "Annabelle",
      },
      {
        value: "benefit",
        label: "Benefit",
      },
      {
        value: "boosh",
        label: "Boosh",
      },
      {
        value: "burt's bees",
        label: "Burt's bees",
      },
      {
        value: "butter london",
        label: "Butter london",
      },
      {
        value: "c'est moi",
        label: "C'est moi",
      },
      {
        value: "cargo cosmetics",
        label: "Cargo cosmetics",
      },
      {
        value: "china glaze",
        label: "China glaze",
      },
      {
        value: "clinique",
        label: "Clinique",
      },
      {
        value: "coastal classic creation",
        label: "Coastal classic creation",
      },
      {
        value: "colourpop",
        label: "Colourpop",
      },
      {
        value: "covergirl",
        label: "Covergirl",
      },
      {
        value: "dalish",
        label: "Dalish",
      },
      {
        value: "deciem",
        label: "Deciem",
      },
      {
        value: "dior",
        label: "Dior",
      },
      {
        value: "dr. hauschka",
        label: "Dr. hauschka",
      },
      {
        value: "e.l.f.",
        label: "E.l.f.",
      },
      {
        value: "essie",
        label: "Essie",
      },
      {
        value: "fenty",
        label: "Fenty",
      },
      {
        value: "glossier",
        label: "Glossier",
      },
      {
        value: "green people",
        label: "Green people",
      },
      {
        value: "iman",
        label: "Iman",
      },
      {
        value: "l'oreal",
        label: "L'oreal",
      },
      {
        value: "lotus cosmetics usa",
        label: "Lotus cosmetics usa",
      },
      {
        value: "maia's mineral galaxy",
        label: "Maia's mineral galaxy",
      },
      {
        value: "marcelle",
        label: "Marcelle",
      },
      {
        value: "marienatie",
        label: "Marienatie",
      },
      {
        value: "maybelline",
        label: "Maybelline",
      },
      {
        value: "milani",
        label: "Milani",
      },
      {
        value: "mineral fusion",
        label: "Mineral fusion",
      },
      {
        value: "misa",
        label: "Misa",
      },
      {
        value: "mistura",
        label: "Mistura",
      },
      {
        value: "moov",
        label: "Moov",
      },
      {
        value: "nudus",
        label: "Nudus",
      },
      {
        value: "nyx",
        label: "Nyx",
      },
      {
        value: "orly",
        label: "Orly",
      },
      {
        value: "pacifica",
        label: "Pacifica",
      },
      {
        value: "penny lane organics",
        label: "Penny lane organics",
      },
      {
        value: "physicians formula",
        label: "Physicians formula",
      },
      {
        value: "piggy paint",
        label: "Piggy paint",
      },
      {
        value: "pure anada",
        label: "Pure anada",
      },
      {
        value: "rejuva minerals",
        label: "Rejuva minerals",
      },
      {
        value: "revlon",
        label: "Revlon",
      },
      {
        value: "sally b's skin yummies",
        label: "Sally b's skin yummies",
      },
      {
        value: "salon perfect",
        label: "Salon perfect",
      },
      {
        value: "sante",
        label: "Sante",
      },
      {
        value: "sinful colours",
        label: "Sinful colours",
      },
      {
        value: "smashbox",
        label: "Smashbox",
      },
      {
        value: "stila",
        label: "Stila",
      },
      {
        value: "suncoat",
        label: "Suncoat",
      },
      {
        value: "w3llpeople",
        label: "W3llpeople",
      },
      {
        value: "wet n wild",
        label: "Wet n wild",
      },
      {
        value: "zorah",
        label: "Zorah",
      },
      {
        value: "zorah biocosmetiques",
        label: "Zorah biocosmetiques",
      },
    ],
  },
  {
    id: "product_type",
    name: "Category",
    options: [
      { value: "Blush", label: "Blush" },
      { value: "Bronzer", label: "Bronzer" },
      { value: "eyebrow", label: " Eyebrow" },
      { value: "eyeliner", label: "Eyeliner" },
      { value: "eyeshadow", label: " Eyeshadow" },
      { value: "foundation", label: "Foundation" },
      { value: "lip liner", label: "Lip liner" },
      { value: "lipstick", label: "Lipstick" },
      { value: "mascara", label: "Mascara" },
      { value: "nail polish", label: "Nail polish" },
    ],
  },
  {
    id: "product_tags",
    name: "Tags list",
    options: [
      {
          "value": "Canadian",
          "label": "Canadian"
      },
      {
          "value": "CertClean",
          "label": "CertClean"
      },
      {
          "value": "Chemical Free",
          "label": "Chemical Free"
      },
      {
          "value": "Dairy Free",
          "label": "Dairy Free"
      },
      {
          "value": "EWG Verified",
          "label": "EWG Verified"
      },
      {
          "value": "EcoCert",
          "label": "EcoCert"
      },
      {
          "value": "Fair Trade",
          "label": "Fair Trade"
      },
      {
          "value": "Gluten Free",
          "label": "Gluten Free"
      },
      {
          "value": "Hypoallergenic",
          "label": "Hypoallergenic"
      },
      {
          "value": "Natural",
          "label": "Natural"
      },
      {
          "value": "No Talc",
          "label": "No Talc"
      },
      {
          "value": "Non-GMO",
          "label": "Non-GMO"
      },
      {
          "value": "Organic",
          "label": "Organic"
      },
      {
          "value": "Peanut Free Product",
          "label": "Peanut Free Product"
      },
      {
          "value": "Sugar Free",
          "label": "Sugar Free"
      },
      {
          "value": "USDA Organic",
          "label": "USDA Organic"
      },
      {
          "value": "Vegan",
          "label": "Vegan"
      },
      {
          "value": "alcohol free",
          "label": "Alcohol free"
      },
      {
          "value": "cruelty free",
          "label": "Cruelty free"
      },
      {
          "value": "oil free",
          "label": "Oil free"
      },
      {
          "value": "purpicks",
          "label": "Purpicks"
      },
      {
          "value": "silicone free",
          "label": "Silicone free"
      },
      {
          "value": "water free",
          "label": "Water free"
      }
  ]
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home({searchText,setCartItem}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  // Initialize state for checkbox values
  const [selectedOptions, setSelectedOptions] = useState("");
  // Handle select change
  const handleSelectChange = (sectionId, selectedValue) => {
    setSelectedOptions(`${sectionId}-${selectedValue}`);
  };
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <IoMdClose className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters mobile */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <FiMinus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <FiPlus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                <label
                                  htmlFor={`filter-${section.id}`}
                                  className="text-sm text-gray-600"
                                >
                                  Select {section.name}:
                                </label>
                                <select
                                  id={`filter-${section.id}`}
                                  name={`${section.id}[]`}
                                  // value={selectedOptions[section.id] || ""}
                                  onChange={(e) =>
                                    handleSelectChange(
                                      section.id,
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-2 border rounded border-gray-300 text-gray-600 focus:outline-none focus:ring focus:border-indigo-300"
                                >
                                  <option value="">Select an option</option>
                                  {section.options.map((option, index) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 pt-5">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
             {''}
            </h1>

            <div className="flex items-center">
              
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FaFilter className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters desktop  */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <FiMinus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <FiPlus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            <label
                              htmlFor={`filter-${section.id}`}
                              className="text-sm text-gray-600"
                            >
                              Select {section.name}:
                            </label>
                            <select
                              id={`filter-${section.id}`}
                              name={`${section.id}[]`}
                              // value={selectedOptions[section.id] || ""}
                              onChange={(e) =>
                                handleSelectChange(section.id, e.target.value)
                              }
                              className="w-full p-2 border rounded border-gray-300 text-gray-600 focus:outline-none focus:ring focus:border-indigo-300"
                            >
                              <option value="">Select an option</option>
                              {section.options.map((option, index) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <Products setCartItem={setCartItem} filterValue={selectedOptions} searchText={searchText} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
