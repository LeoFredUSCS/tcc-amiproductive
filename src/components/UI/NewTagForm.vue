<template>
  <div class="">
    <h3 class="text-lg leading-6 font-bold">
      Adicionar nova categoria
    </h3>

    <form class="mt-2 sm:flex sm:items-center">
      <div class="w-full flex">
        <input
          type="text"
          name="new-tag"
          id="new_tag"
          class="shadow-sm w-full border-gray-300 hover:border-primary rounded-md rounded-r-none border p-2"
          placeholder="Digite a nova categoria"
        />
      </div>
      <button
        type="submit"
        class="w-full inline-flex items-center justify-center p-2 px-3 h-full border border-primary hover:bg-primary-dark trandition shadow-sm font-medium rounded-md rounded-l-none text-white bg-primary-dark sm:mt-0 sm:w-auto"
      >
        Adicionar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {}
  }
}
</script>
