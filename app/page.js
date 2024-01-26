import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="https://assets-global.website-files.com/65a6baa1a3f8ed336f415cb4/65a6cee39aadb0fa7418aa77_Blast%20Logo%20Icon%20Yellow.svg"
              class="h-8"
              alt="Blast Logo"
              width={50}
              height={50}
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              create-blast-dapp
            </span>
          </a>
        </div>
      </nav>

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <Link
            href="#"
            class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-yellow-300 dark:text-black hover:bg-yellow-500 dark:hover:bg-yellow-500"
            role="alert"
          >
            <span class="text-sm font-medium">
              Introducing create-blast-dapp
            </span>
            <svg
              class="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Build Full Stack Blast dApp in 3 minutes
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            A full-stack starter template featuring Next & Hardhat, designed for
            building Dapps, as well as developing, deploying, testing, and
            verifying Solidity smart contracts on the Blast L2 chain.
          </p>
          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              <p>{"npx create-blast-dapp <your-dapp-name>"}</p>
            </Link>
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Build with the power of AI inside your dApp.
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              This starter kit includes a pre-built Blast AI chatbot. It can
              assist you in asking general questions, writing smart contracts,
              solving complex queries, and much more about your dApp on Blast.
              Ultimately, it can help you get started with building on Blast L2
              chain.
            </p>

            <Link
              href="https://github.com/AsharibAli/create-blast-dapp"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5c0-1.044-.346-2.982-1.667-4C13.346 15.582 11 16 9 16v-3.5a1.342 1.342 0 01.333-.845l1.757-1.586C7.711 9.242 6 8.338 6 6.5 6 4.836 7.582 3 9 3s3 1.836 3 3.5 0 2.264-1.5 3.5l1.5 2a1.342 1.342 0 01.333.845V16c-2 0-4.346-.418-5.667-1.5C8.654 15.018 9 16.956 9 18v3.5c0 1.044-.346 2.982-1.667 4C13.346 23.582 15 22 15 22c5-1.5 5 2.5 7 3"
                ></path>
              </svg>
              Github Code
            </Link>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="https://assets-global.website-files.com/65a6baa1a3f8ed336f415cb4/65a6cf1c8674dbad24d5f027_Blast%20Logo%20Yellow.svg"
              alt="blast"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              Start building on Blast L2.
            </h2>
            <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              A npm Package that allows you to build dApps with just single
              command.
            </p>
            <Link
              href="https://www.npmjs.com/package/create-blast-dapp"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="h-5 w-5 mr-2"
              >
                <path
                  fill="currentColor"
                  d="M288 32H32v448h512V32H288zM32 32h192v192H32V32zm192 448V224h192v256H224zm192 0h128V224H416v256z"
                ></path>
              </svg>
              Npm Package
            </Link>
          </div>
        </div>
      </section>

      <footer class="bg-white shadow dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center text-center">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link
              href="https://github.com/AsharibAli/create-blast-dapp"
              class="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              create-blast-dapp
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default page;
