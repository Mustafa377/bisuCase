<template>
    <div class="CheckBox-YC">
        <div class="cbx" :style="label === '' ? 'margin-right: 0!important;':''">
            <input
                type="radio"
                :id="id"
                :name="name"
                :value="value"
                :checked="isChecked"
                :disabled="disabled"
                @change="$emit('change', value)"
            />
            <label :for="id"></label>
            <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
                <path d="M2 8.36364L6.23077 12L13 2"></path>
            </svg>
        </div>
        <label :for="id" class="checkbox-label" v-html="label" />
    </div>
</template>

<script>
/**
 * @author Can Bahadır Ceylan & Yücel Düz <can.ceylan@metalteknoloji.com> - <yucel.duz@metalteknoloji.com>
 */

export default {
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    props: {
        id: { // Input ID => (Zorunlu Değil)
            type: String,
            default: ''
        },
        name: { // Input Name => (Zorunlu)
            type: String,
            required: true,
        },
        label: { // Label => (Zorunlu Değil)
            type: String,
            default: ''
        },
        value: { // Radio'nun aldığı değer => (Zorunlu)
            type: [String, Array, Boolean],
            required: true,
            default: ''
        },
        modelValue: {
            type: [String, Number, Boolean],
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isChecked() {
            return this.modelValue == this.value
        }
    }
};
</script>

<style lang="scss">
.CheckBox-YC {
    //width: 100%;
    position: relative;
    //margin-bottom: 10px;

    * {
        box-sizing: border-box;

        &:hover {
            cursor: pointer;
        }
    }

    input[type="checkbox"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
        margin: 0;
    }

    input[type="checkbox"]:focus {
        outline: 0;
    }

    .cbx {
        //position: absolute;
        width: 20px;
        height: 20px;
        float: left;
        margin-right: 7px;

        input {
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            border: 2px solid #bfbfc0;
            border-radius: 50%;
        }

        label {
            width: 20px;
            height: 20px;
            background: none;
            border-radius: 50%;
            top: 0;
            left: 0;
            -webkit-filter: url("#goo");
            filter: url("#goo");
            transform: trasnlate3d(0, 0, 0);
            pointer-events: none;
        }

        svg {
            position: absolute;
            top: 4px;
            left: 3px;
            z-index: 1;
            pointer-events: none;
        }

        svg path {
            stroke: #fff;
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 19;
            stroke-dashoffset: 19;
            transition: stroke-dashoffset 0.3s ease;
            transition-delay: 0.2s;
        }
    }

    .cbx input:checked + label {
        animation: splash 0.6s ease forwards;
    }

    .cbx input:checked + label + svg path {
        stroke-dashoffset: 0;
    }

    @-moz-keyframes splash {
        40% {
            background: #1565C0;
            box-shadow: 0 -18px 0 -8px #1565C0, 16px -8px 0 -8px #1565C0, 16px 8px 0 -8px #1565C0, 0 18px 0 -8px #1565C0, -16px 8px 0 -8px #1565C0, -16px -8px 0 -8px #1565C0;
        }
        100% {
            background: #1565C0;
            box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
        }
    }
    @-webkit-keyframes splash {
        40% {
            background: #1565C0;
            box-shadow: 0 -18px 0 -8px #1565C0, 16px -8px 0 -8px #1565C0, 16px 8px 0 -8px #1565C0, 0 18px 0 -8px #1565C0, -16px 8px 0 -8px #1565C0, -16px -8px 0 -8px #1565C0;
        }
        100% {
            background: #1565C0;
            box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
        }
    }
    @-o-keyframes splash {
        40% {
            background: #1565C0;
            box-shadow: 0 -18px 0 -8px #1565C0, 16px -8px 0 -8px #1565C0, 16px 8px 0 -8px #1565C0, 0 18px 0 -8px #1565C0, -16px 8px 0 -8px #1565C0, -16px -8px 0 -8px #1565C0;
        }
        100% {
            background: #1565C0;
            box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
        }
    }
    @keyframes splash {
        40% {
            background: #1565C0;
            box-shadow: 0 -18px 0 -8px #1565C0, 16px -8px 0 -8px #1565C0, 16px 8px 0 -8px #1565C0, 0 18px 0 -8px #1565C0, -16px 8px 0 -8px #1565C0, -16px -8px 0 -8px #1565C0;
        }
        100% {
            background: #1565C0;
            box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
        }
    }

    .checkbox-label {
        float: left;
        font-size: .95rem;
        width: 100%;
        display: contents;
    }

    .label-count{
        float: right;
        color: #1565C0;
    }
}
</style>
