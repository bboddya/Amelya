<template>
  <div class="header-bot">
    <nav>
      <ul class="nav">

        <li>
          <a href="#" class="nav_item">БУКЕТЫ</a>
        </li>

        <li>
          <a href="#" class="nav_item">АВТОРСКИЕ БУКЕТЫ</a>
        </li>

        <li>
          <a href="#" class="nav_item">РОЗЫ</a>
        </li>

        <li>
          <a href="#" class="nav_item">ЦВЕТЫ</a>
        </li>

        <li>
          <a href="#" class="nav_item">КОМПОЗИЦИИ</a>
        </li>

        <li>
          <a href="#" class="nav_item">ПОДАРКИ</a>
        </li>

      </ul>
    </nav>

    <div class="search">
      <input
          type="text"
          class="search__input"
          placeholder="поиск по каталогу">

      <span class="search__icon">
        <svg class="search__icon-img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="46" height="44" viewBox="0 0 46 44">
          <g><g><image width="46" height="44" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAsCAYAAAAacYo8AAAFSUlEQVRoQ82Zf6zVcxjHX89zLs0VF8OSzEh+TWRLTEWS5MfYWDTWxpBJI1SWZWMyEcNi68c/yEqWoRpaak0mv/KHWs2PwvoxVlNNpdU9n8ee07m37/meH9/POfc29/nznud5f17ncz6fz/PjCvWZAgMVHWbYFSDnAacAzcBBYBfIz4KtDchyyC8F/qlviThviXPjBNBHBO4HzoiMcbd9AgsD4UVgfR1xma5Z4DnQhwSmAi2ZatUdTOCtQJgE7OiATntoLfCeQm4+2FWdsVBRY7uhd0Hr5x3VrAbeV1A/n6dlLBCAbcDfwLFAT+CYrBiDhyHM7Ah8JXCHXlXjaGwTeCcQlgDfAQcSAK7XB3S4IKPBBlSDMxgP4fVG4dPgPQT9Hji9guAugykQ5qRga6zdNEQIrwL9KjiZIbdD/sNG4JPgKsgykKHlQrLKyI8qHot612lSdKrBkxUCdxvBv9Tv9YomwHMPCDa7XMAWGTYyfperIegYgVkV9JcaNqJR8O6C/gacXCogXxr5azsO3aaqkwT8TS8xQ26E/Kf1wBd3XCcITE8F7jTCRQ0ej2oMIsgnIKkdltVG/sq6wQX9BTgnGWgwDsKb9YhF+p4l6AagW+l64RLgx0gNfMcHCPpNKmCLEXp33hEpVVd0lsGY5F8FpgXC5DrAdYrAcymRqYHwdKxIA36XCvpDKm6NEfrHavmZWwJyU+pnuwzw9/yImaCbgV6JBYIRugP/xiwqgm4Ezk447y8K5GMEGvVR9D2DOxs95w6+L1VfbDDChY0CxcYp+rzBU6XgegO0fhaj4eBW6ljIkp1ZEVbh0PECXg60myEjIb+wUfC639SYhcp9ynOHIbfF1i6+47uB4xPCG41Q8qY3BlY7StHpBhNSR2UEtHo5nWkOvhbwDNlm+eLl3J8Z3QEHQRaD3Jy6nOcDP8XIiqILDO5IffPrOqNLqQGQE3Q7cGLCx1+z44DWKHDQcQIzks4CswPhwRiBxnyarhdC6vWwlYZdE6vnKb+3oL+mAvYawbv5nbFC9fhVPiZ+3sMrsTqF6lDIraYwJzlsAi8HwsRYoTr8BhVbw2SI36szga2xOsWyNjdKsPmpoFYjDAS+jRWL8GsutoYXpDbp/UAoyaJZWm0dkAq6DigRBP4wgtfJ3sl31PwhmJ9O84DXKH3rHRglWremoUJYXoHOS4DhwJYOkOcUnWNwb7lGoYnwZ9FHHNFW0uUr+sahmUeZ/WXoaGhdFq182LGXIHNBhtSI3WvwBIQKPWnlqPR4opuQWwFWsY0SmBcIPo7zDibLWkDHCnhz4O9zpgk8GwjPZDoWHpRyO0nQlYCfuyrmTbQtguCd0yZgD3DUofo610+x4Qa3FKe4MRztPgaPQXgtK6jaCK5FyC0GG5wlcCQ+N+QeyL9dS7vW0NMHOS8YPA74XLwTzFYY8kExU9fSDMUp10dVf/MImv5CbkY6QUXEJV02GzIF8nMBg2rDpxLVA0ahsVhRaa2s+Xgy5mpFxxrcmh4t1LgLXxvMgfy75RMDnSjwUsYG7DHCMCA9hah4ObM2sxmaBkO4XOFcw3qA+mj5IISdgmwKyBrI+wWvmbgUnVZlpphk2GEEL748QbZbPTue9YUa+dyz6cz0jKWC0FYj+EPhY8KC/d/gzuBZdV66J6gA753ZIODPrgLuHEcL8nH5TLEMf10RfndX2PE2umYht6xa1k6cbq9thnUlcGdrEfQL4OLaF8aWdjVw5z1V0K+8M6sC78npvq4I7ry9BPXE0ycFf9AK/xTLL+iq4M7bXdHJBncD3tatN/TRtunDf0bRi2OPzLy/AAAAAElFTkSuQmCC"/></g></g>
        </svg>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Navigation'
}
</script>

<style lang="sass">
.header-bot
  display: flex
  margin-top: 30px
  justify-content: space-around
  align-items: center

  .nav
    width: 610px
    display: flex
    justify-content: space-between

    .nav_item
      font-size: 26px
      font-weight: 400
      text-decoration: none
      color: $secondary-text-hover

  .search
    width: 299px
    height: 71px
    border-radius: 35px
    border: 3px solid $primary-bg
    display: flex
    align-items: center
    padding: 0 8px
    text-decoration: none
    transition: all 0.3s
    color: #707070
    font-size: 24px
    font-weight: 500
    padding: 0 40px

    .search__input
      width: 150px
      border: none
</style>