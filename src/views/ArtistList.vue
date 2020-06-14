<template>
  <main>
    <div class="title-wrapper">
      <router-link to='/list' class="back-link">
        <span class="back-button">
          <svg id="Layer" enable-background="new 0 0 64 64" height="40" viewBox="0 0 64 64" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z"/>
          </svg>
        </span>
      </router-link>
      <h1>{{this.$route.params.artist}}</h1>
    </div>
    <table v-if="songs.length">
      <thead>
      <tr>
        <th>Исполнитель</th>
        <th>Название песни</th>
        <th class="date">Дата добавления</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="song of filteredSongs" :key="song.id" class="song">
        <td class="artist-name">
         {{song.artist}}
        </td>
        <td class="song-name">
          <button
            @click="$router.push(`/list/${song.artist}/${song.songName}`)"
          >{{song.songName}}</button>
        </td>
        <td class="date">
          <span>{{song.date | date('datetime')}}</span>
        </td>
        <td class="delete-btn-td">
          <button
            class="delete-btn"
            :data-id="song.id"
            @click="deleteSong(song.id)"
          ></button>
        </td>
      </tr>
      </tbody>
    </table>
    <p v-else class="empty-list">Текстов пока нет!</p>
  </main>
</template>

<script>
  export default {
    data: () => ({
      songs: [],
    }),

    mounted() {
      const artist = this.$route.params.artist
      this.songs = this.$store.getters.songsByArtist(artist)
    },

    computed: {
      filteredSongs() {
        const artist = this.$route.params.artist
        this.songs = this.$store.getters.songsByArtist(artist)
        const songs = this.songs
        return songs 
      }
    },

    methods: {
      deleteSong(id) {
        this.$store.dispatch('deleteSong', id)
      }
    },
  }
</script>


<style lang="less" scoped>


  .title-wrapper {
    display: flex;
    padding-top: 27px;
    padding-bottom: 27px;
    align-items: center;
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 10px;
    text-align: left;
    margin-right: 70px;
  }

  .artist-name,
  .date,
  .song-name button {
    font-family: inherit;
    font-weight: 600;
  }

  .delete-btn-td {
      padding-right: 0;
    }

  .date {
    position: relative;
    z-index: 10;
  }

  .delete-btn {
    opacity: 0;
    transition: .6s;

    width: 15px;
    height: 15px;

    top: 22px;
    left: 220px;

    cursor: pointer;

    z-index: 10;

    background-image: url('../assets/img/delete.svg')
  }

  .song:hover {
    .delete-btn {
      opacity: 1;
    }
  }

  

  p {
    margin-top: 100px;
    font-weight: bold;
  }

  td, th {
    padding-right: 50px;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  th {
    font-weight: bold;
    padding-top: 0;
    padding-bottom: 0;
  }
  button {
    border: none;
    background-color: transparent;
    font-size: 24px;
    cursor: pointer;
  }

  .date {
    padding-right: 0;
  }

  table {
    margin: 0 auto;
    margin-top: 120px;
  }

  @media (max-width: 1000px) {
    .delete-btn {
      left: 90%;
      vertical-align: center;
      opacity: 1;
    }
  }


  @media (max-width: 747px) {
    table, button {
      font-size: 20px;
    }
    td, th {
      padding-right: 25px;
    }
  }

  @media (max-width: 539px) {
    table, button {
      font-size: 16px;
    }
  }

  @media (max-width: 451px) {
    td, th {
      padding-right: 10px;
    }
  }

  @media (max-width: 433px) {
    table, button {
      font-size: 12px;
    }
  }

  
</style>