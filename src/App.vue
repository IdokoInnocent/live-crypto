<template>
  <!-- ============ Marquee ============ -->
  <div class="marquee w-full h-12 overflow-hidden bg-black position-relative">
    <ul class="marquee-content h-full flex" ref="mq">
      <!-- main -->
      <!-- 1 -->
      <li
        class="flex justify-center items-center flex-shrink-0 text-white transform scale-75 lg:scale-100"
        v-for="coin in getTenCoins"
        :key="coin.name"
      >
        <div class="flex justify-between w-3/4">
          <!-- ticker -->
          <div class="flex items-center">
            <img
              :src="coin.image"
              alt="coin logo"
              class="w-4 h-4 lg:w-6 lg:h-6 rounded-full mr-4 object-cover"
            />
            <div class="hidden lg:block">
              <p class="font-bold">{{ coin.name }}</p>
              <p class="text-xs uppercase tracking-widest ">
                {{ coin.symbol }}
              </p>
            </div>
          </div>
          <!-- price -->
          <div>
            <p class="font-bold text-xs lg:text-base flex justify-end ">
              {{ $filters.commaSeparator(coin.current_price) }}
            </p>

            <!-- percent red -->
            <p
              class="font-bold text-xs text-red-400 flex justify-end items-center "
              v-if="$filters.priceChange(coin.price_change_percentage_24h)"
            >
              <fa icon="caret-down" class="mr-1" />
              {{ $filters.stringLimit(coin.price_change_percentage_24h, 5) }}%
            </p>
            <!-- percent green -->
            <p
              class="font-bold text-xs text-green-400 flex justify-end items-center "
              v-else
            >
              <fa icon="caret-up" class="mr-1" />
              {{ $filters.stringLimit(coin.price_change_percentage_24h, 5) }}%
            </p>
          </div>
        </div>
      </li>
      <!-- 2 -->

      <!-- clones -->
      <!-- 1 -->
      <li
        class="flex justify-center items-center flex-shrink-0 text-white transform scale-75 lg:scale-100"
        v-for="coin in cloneCoins"
        :key="coin.name"
      >
        <div class="flex justify-between w-3/4">
          <!-- ticker -->
          <div class="flex items-center">
            <img
              :src="coin.image"
              alt="coin logo"
              class="w-4 h-4 lg:w-6 lg:h-6 rounded-full mr-4 "
            />
            <div class="hidden lg:block">
              <p class="font-bold">{{ coin.name }}</p>
              <p class="text-xs uppercase tracking-widest">
                {{ coin.symbol }}
              </p>
            </div>
          </div>
          <!-- price -->
          <div>
            <p class="font-bold flex justify-end text-xs lg:text-base">
              {{ $filters.commaSeparator(coin.current_price) }}
            </p>
            <!-- percent red -->
            <p
              class="font-bold text-xs text-red-400 flex justify-end items-center "
              v-if="$filters.priceChange(coin.price_change_percentage_24h)"
            >
              <fa icon="caret-down" class="mr-1" />
              {{ $filters.stringLimit(coin.price_change_percentage_24h, 5) }}%
            </p>
            <!-- percent green -->
            <p
              class="font-bold text-xs text-green-400 flex justify-end items-center "
              v-else
            >
              <fa icon="caret-up" class="mr-1" />
              {{ $filters.stringLimit(coin.price_change_percentage_24h, 5) }}%
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- ============ Events ============ -->
  <section class="event">
    <div class="container mx-auto py-4 lg:py-24 flex flex-wrap justify-center ">
      <!-- 1 -->
      <a href="#" class="rounded m-6" target="_blank">
        <img
          src="https://source.unsplash.com/random/10"
          alt="event image"
          class="w-80 h-52 mx-auto object-cover rounded"
        />
        <div class="pt-2 w-80">
          <p class="font-medium pt-2">Lorem Ipsum</p>
          <p class="text-xs pt-2 w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            error. Facilis temporibus ratione obcaecati nulla!
          </p>
        </div>
      </a>
      <!-- 2 -->
      <a href="#" class="rounded m-6" target="_blank">
        <img
          src="https://source.unsplash.com/random/11"
          alt="event image"
          class="w-80 h-52 mx-auto object-cover rounded"
        />
        <div class="pt-2 w-80">
          <p class="font-medium pt-2">Lorem Ipsum</p>
          <p class="text-xs pt-2 w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            error. Facilis temporibus ratione obcaecati nulla!
          </p>
        </div>
      </a>
      <!-- 3 -->
      <a href="#" class="rounded m-6" target="_blank">
        <img
          src="https://source.unsplash.com/random/12"
          alt="event image"
          class="w-80 h-52 mx-auto object-cover rounded"
        />
        <div class="pt-2 w-80">
          <p class="font-medium pt-2">Lorem Ipsum</p>
          <p class="text-xs pt-2 w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            error. Facilis temporibus ratione obcaecati nulla!
          </p>
        </div>
      </a>
    </div>
  </section>
  <!-- ============ Table ============ -->
  <div class="container mx-auto pt-18 pb-48 px-2">
    <!-- search -->
    <div class="flex justify-end pb-2">
      <div class="relative">
        <input
          type="text"
          placeholder="search..."
          class="border border-gray-500 rounded p-2 focus:outline-none focus:ring focus:ring-gray-300"
          v-model="searchItem"
        />
        <fa
          icon="search"
          class="text-gray-500 absolute right-2 top-2/4 transform -translate-y-1/2"
        />
      </div>
    </div>
    <!-- table -->
    <table class="table-fixed cursor-pointer">
      <!-- head -->
      <thead class="bg-gray-200">
        <tr class="text-left text-gray-600 text-sm">
          <th class="w-1/4 p-4">Name</th>
          <th class="w-1/4">Price</th>
          <th class="w-1/4">1h %</th>
          <th class="w-1/4 hidden sm:table-cell">Market Cap</th>
          <th class="w-1/4 hidden sm:table-cell">Volume</th>
        </tr>
      </thead>
      <!-- body -->
      <tbody class="divide-y">
        <!-- 1 -->
        <tr
          class="text-sm hover:bg-gray-100 transition duration-300"
          v-for="matchingName in matchingNames"
          :key="matchingName.name"
        >
          <td class="p-4 flex items-center">
            <p class="mr-2">{{ matchingName.market_cap_rank }}</p>
            <img
              :src="matchingName.image"
              alt="coin logo"
              class="w-6 h-6 rounded-full mr-1"
            />
            <p class="font-bold mr-1">{{ matchingName.name }}</p>
            <p class="uppercase text-gray-500 hidden sm:table-cell">
              {{ matchingName.symbol }}
            </p>
          </td>
          <td class="font-bold">
            {{ $filters.commaSeparator(matchingName.current_price) }}
          </td>
          <td class=" font-bold">
            <div
              class="text-red-500"
              v-if="
                $filters.priceChange(matchingName.price_change_percentage_24h)
              "
            >
              <fa icon="caret-down" class="mr-1" />{{
                matchingName.market_cap_change_percentage_24h
              }}
            </div>
            <div class="text-green-500" v-else>
              <fa icon="caret-up" class="mr-1" />{{
                matchingName.market_cap_change_percentage_24h
              }}
            </div>
          </td>
          <td class="hidden sm:table-cell">
            {{ $filters.commaSeparator(matchingName.market_cap) }}
          </td>
          <td class="pr-4 hidden sm:table-cell">
            {{ $filters.commaSeparator(matchingName.total_volume) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import "./assets/tailwind.css";
import axios from "axios";
import { computed, ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";

export default {
  name: "App",
  setup() {
    // store the data here
    const allCoins = ref([]);
    const cloneCoins = ref([]);
    const searchItem = ref("");
    const events = ref([]);

    // Api calls
    const getCoins = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h"
        );
        allCoins.value = res.data;
        console.log(allCoins);
      } catch (err) {
        error.value = err.message;
      }
    };

    const getEvents = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/asset_platforms"
        );
        events.value = res.data;
      } catch (err) {
        console.log(err.message);
      }
    };

    getEvents();

    // fetch Timer
    setInterval(() => {
      getCoins();
    }, 1200);

    // Getting ten items form allcoins
    const getTenCoins = computed(() => {
      return allCoins.value.slice(0, 10);
    });

    // Get another 5coin for clone
    watchEffect(() => {
      const duplicateCoin = allCoins.value.slice(0, 5);
      cloneCoins.value = duplicateCoin;
    });

    const matchingNames = computed(() => {
      return allCoins.value.filter((coin) =>
        coin.id.includes(searchItem.value)
      );
    });

    return {
      allCoins,
      getCoins,
      getTenCoins,
      cloneCoins,
      matchingNames,
      searchItem,
    };
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.marquee-content {
  animation: scrolling 20s linear infinite;
}
.marquee-content:hover {
  animation-play-state: paused;
}
.marquee-content li {
  width: 20%;
}
.marquee:before,
.marquee:after {
  position: absolute;
  top: 0;
  width: 10rem;
  height: 3em;
  content: "";
  z-index: 1;
}
.marquee:before {
  left: 0;
  background: linear-gradient(to right, #111 0%, transparent 100%);
}
.marquee:after {
  right: 0;
  background: linear-gradient(to left, #111 0%, transparent 100%);
}
.event {
  background-image: url("./assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
}
.event:before {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6em;
  content: "";
  z-index: 1;
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
}
@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}
</style>
