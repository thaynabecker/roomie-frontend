<script setup>
import SideBarComponent from '@/components/SideBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue';
import ProfileComponent from '@/components/ProfileComponent.vue';

const user = {
  name: 'Amanda Santos',
  role: 'admin',
  photoUrl: '/assets/img/your-photo.jpg'
}
</script>

<template>
    <header class="header">
      <div class="header-bar">
        <div class="header-left">
          <SearchComponent />
        </div>
        <div class="header-right">
          <ProfileComponent
            :name="user.name"
            :role="user.role"
            :photo-url="user.photoUrl"
          />
        </div>
      </div>
    </header>

    <div class="sidebar">
        <SideBarComponent />
    </div>

    <main class="conteudo">
        <RouterView />
    </main>

     <footer class="footer">
      <FooterComponent />
    </footer>
</template>

<style scoped>
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
}
.header-left {
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 20px;
}
.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
}
.header {
  grid-area: header;
  height: 80px;
  background-color: white;
}
.sidebar {
  grid-area: sidebar;
  width: 250px;
  /* background-color: #7a0f13; */
  background: linear-gradient(to bottom, rgba(134, 39, 39, 0.829) 2%, #6F0A0C 20%);
  color: white;
  border-radius: 10px;
  /* width: 250px; */
  height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-radius: 20px 0 0 20px; */
  font-family: "Poppins", sans-serif;

}

.conteudo {
  grid-area: main;
  align-self: top;
  padding-bottom: 180px; /* ajusta conforme a altura real do seu footer */
  /* display: flex; */
  /* padding: 10px; */
  /* overflow-y: auto; */
  /* background-color: #601014; */
  /* flex: 1; */
  /* overflow: hidden; */
}

.footer {
  grid-area: footer;
  background-color: #601014;
  color: white;
  padding: 20px;
  margin-top:20px;
  border-radius: 10px;
  text-align: center;
}

</style>
