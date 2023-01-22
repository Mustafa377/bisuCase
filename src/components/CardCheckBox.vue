<template>
    <label class="card_box">
        <input 
            class="card__input" 
            type="checkbox" 
            :value="value" 
            :checked="value"
            :disabled="disabled"
            @change="onChange"/>
        <div class="card__body">
            <div class="card__body-cover">
                <img :src="imgSrc" alt="" style="width: 100%; height: auto; object-fit: cover;">
                <span class="card__body-cover-checkbox"> 
                    <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
            </div>
            <header class="card__body-header d-flex justify-content-center align-items-center">
                <h6 class="card__body-header-title m-0 text-center" v-html="title"></h6>
                <p class="card__body-header-subtitle m-0" v-html="subTitle"></p>
            </header>
        </div>
    </label>
</template>

<script>
/**
 * @author Can Bahadır Ceylan <can.ceylan@metalteknoloji.com>
 */

export default {
    props: {
        title: {
            type: String,
            default: '',
            require: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        subTitle: {
            type: String,
            default: ''
        },
        imgSrc: {
            type: String,
            default: '',
            require: true,
        },
        value: {
            type: [String, Array, Boolean],
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            chkValue: this.value,
        }
    },
    created() {
        //this.checked = this.value
    },
    watch: {
        'chkValue': function () {
            // v-model olarak belirlediğimiz objeye dönecek olan objeyi set ediyoruz
            this.$emit('input', this.chkValue);
        }
    },
    methods: {
        onChange(e) {
            if(e.target.checked) {
                if(typeof this.value === 'object') {
                    this.value.push(this.modelValue);
                    this.$emit('input', this.value); // v-model olarak belirlediğimiz objeye dönecek olan objeyi set ediyoruz
                } else if(typeof this.value === 'boolean') this.chkValue = e.target.checked;
            } else {
                if(typeof this.value === 'object') {
                    if(this.value.includes(this.modelValue)) this.value.splice(this.value.indexOf(this.modelValue), 1);
                    this.$emit('input', this.value); // v-model olarak belirlediğimiz objeye dönecek olan objeyi set ediyoruz
                } else if(typeof this.value === 'boolean') this.chkValue = e.target.checked;
            }
        }
    }
};
</script>

<style lang="scss">
.card_box {
  --background: #fff;
  --background-checkbox: #0082ff;
  --background-image: #fff, rgba(0, 107, 175, 0.2);
  --text-color: #666;
  --text-headline: #000;
  --card-shadow: #0082ff;
  --card-height: 150px;
  --card-width: 150px;
  --card-radius: 12px;
  --header-height: 55px;
  --blend-mode: overlay;
  --transition: 0.15s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 0!important;
}

.card_box:nth-child(odd) .card__body-cover-image {
  --x-y1: 100% 90%;
  --x-y2: 67% 83%;
  --x-y3: 33% 90%;
  --x-y4: 0% 85%;
}

.card_box:nth-child(even) .card__body-cover-image {
  --x-y1: 100% 85%;
  --x-y2: 73% 93%;
  --x-y3: 25% 85%;
  --x-y4: 0% 90%;
}

.card__body {
    border: 1px solid #d8dbe0;
    display: grid;
    grid-auto-rows: calc(var(--card-height) - var(--header-height)) auto;
    background: var(--background);
    height: var(--card-height);
    width: var(--card-width);
    border-radius: var(--card-radius);
    overflow: hidden;
    position: relative;
    cursor: pointer;
    box-shadow: var(--shadow, 0 0 4px rgba(60, 72, 88, 0.2));
    -webkit-transition: box-shadow var(--transition), -webkit-transform var(--transition);
    transition: box-shadow var(--transition), -webkit-transform var(--transition);
    transition: transform var(--transition), box-shadow var(--transition);
    transition: transform var(--transition), box-shadow var(--transition), -webkit-transform var(--transition);
    -webkit-transform: scale(var(--scale, 1)) translateZ(0);
    transform: scale(var(--scale, 1)) translateZ(0);
}

.card__body:active {
  --scale: 0.96;
}

.card__body-cover {
  --c-border: var(--card-radius) var(--card-radius) 0 0;
  --c-width: 100%;
  --c-height: 100%;
  position: relative;
  overflow: hidden;
}

.card__body-cover:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: var(--c-width);
  height: var(--c-height);
  border-radius: var(--c-border);
  background: -webkit-gradient(linear, left top, right bottom, from(var(--background-image)));
  background: linear-gradient(to bottom right, var(--background-image));
  mix-blend-mode: var(--blend-mode);
  opacity: var(--opacity-bg, 1);
  -webkit-transition: opacity var(--transition) linear;
  transition: opacity var(--transition) linear;
}

.card__body-cover-image {
  width: var(--c-width);
  height: var(--c-height);
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: var(--c-border);
  -webkit-filter: var(--filter-bg, grayscale(1));
  filter: var(--filter-bg, grayscale(1));
  -webkit-clip-path: polygon(0% 0%, 100% 0%, var(--x-y1, 100% 90%), var(--x-y2, 67% 83%), var(--x-y3, 33% 90%), var(--x-y4, 0% 85%));
  clip-path: polygon(0% 0%, 100% 0%, var(--x-y1, 100% 90%), var(--x-y2, 67% 83%), var(--x-y3, 33% 90%), var(--x-y4, 0% 85%));
}

.card__body-header {
  height: var(--header-height);
  background: var(--background);
  padding: 5px;
}

.card__body-header-title {
  color: var(--text-headline);
  font-weight: 700;
  margin-bottom: 8px;
}

.card__body-header-subtitle {
  color: var(--text-color);
  font-weight: 500;
  font-size: 13px;
}

.card__input {
  position: absolute;
  display: block;
  outline: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
}

.card__input:checked ~ .card__body {
  --shadow: 0 0 0 3px var(--card-shadow);
  border: 0!important;
}

.card__input:checked ~ .card__body .card__body-cover-checkbox {
  --check-bg: var(--background-checkbox);
  --check-border: #fff;
  --check-scale: 1;
  --check-opacity: 1;
}

.card__input:checked ~ .card__body .card__body-cover-checkbox--svg {
  --stroke-color: #fff;
  --stroke-dashoffset: 0;
}

.card__input:checked ~ .card__body .card__body-cover:after {
  --opacity-bg: 0;
}

.card__input:checked ~ .card__body .card__body-cover-image {
  --filter-bg: grayscale(0);
}

.card__input:disabled ~ .card__body {
  cursor: not-allowed;
  opacity: 0.5;
}

.card__input:disabled ~ .card__body:active {
  --scale: 1;
}

.card__body-cover-checkbox {
  background: var(--check-bg, var(--background-checkbox));
  border: 2px solid var(--check-border, #fff);
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  opacity: var(--check-opacity, 0);
  transition: transform var(--transition), opacity calc(var(--transition) * 1.2) linear, -webkit-transform var(--transition) ease;
  -webkit-transform: scale(var(--check-scale, 0));
  transform: scale(var(--check-scale, 0));
}

.card__body-cover-checkbox--svg {
  width: 13px;
  height: 11px;
  display: inline-block;
  vertical-align: top;
  fill: none;
  margin: 7px 0 0 5px;
  stroke: var(--stroke-color, #fff);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: var(--stroke-dashoffset, 16px);
  -webkit-transition: stroke-dashoffset 0.4s ease var(--transition);
  transition: stroke-dashoffset 0.4s ease var(--transition);
}
</style>
