<template>
  <div class="person">
    <img :src="person.avatar.large" v-if="person.avatar && person.avatar.large">
    <p v-if="person.name" class="card__name">{{person.name}}</p>
    <p v-if="person.title" class="card__title">{{person.title}}</p>
    <p v-if="person.location" class="card__location">{{person.location}}</p>
    <div class="person__stats" v-if="person.reach && person.relevance && person.resonance">
      <span v-if="person.reach">{{person.reach}}</span>
      <span v-if="person.relevance">{{person.relevance}}</span>
      <span v-if="person.relevance">{{person.resonance}}</span>
    </div>
    <div class="person__profile">
      <!-- <Link to={`/influencer/${person.uid}`}><img src="/images/profile.svg" /></Link> -->
    </div>
    <div class="person__connect">
      <!-- <Link to={`/influencer/${person.uid}`}><img src="/images/heart.svg" /></Link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    person: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.person {
  position: relative;
  width: 360px;
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 16px;
  margin: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  @media (max-width: 400px) {
    width: 100%;
  }
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: 0.5s ease 0s normal both 1 fadein;
  /* animation-delay: $ {
    props=>props.delay? props.delay : "0s";
  } */
  p {
    margin: 0;
  }
  .card__name {
    font-size: 21px;
    color: #14c4fe;
    padding: 0 0 5px 0;
  }
  .card__title {
    font-size: 18px;
    color: #727070;
    padding: 0 0 20px 0;
  }
  .card__location {
    text-align: center;
    color: #727070;
    padding: 0;
  }
  .person__profile,
  .person__connect {
    display: inline-block;
    a {
      display: inline-block;
      width: 44px;
      height: 44px;
      padding: 12px;
    }
    img {
      width: 20px;
    }
  }
  .person__profile {
    position: absolute;
    top: 0;
    right: 0;
  }
  .person__connect {
    position: absolute;
    top: 30px;
    right: 0;
  }
}
.person__stats {
  padding: 20px;
}
</style>
