<template>
  <svg width="450" height="450" xmlns="http://www.w3.org/2000/svg">
    <!-- Оси -->
    <line stroke="black" x1="0" x2="440" y1="220" y2="220"></line>
    <line stroke="black" x1="220" x2="220" y1="0" y2="440"></line>

    <!-- Стрелки -->
    <polygon fill="black" points="220,0 214,15 226,15" stroke="black"></polygon>
    <polygon fill="black" points="440,220 425,226 425,214" stroke="black"></polygon>

    <!-- Деления -->
    <line stroke="black" x1="320" x2="320" y1="215" y2="225"></line>
    <line stroke="black" x1="420" x2="420" y1="215" y2="225"></line>

    <line stroke="black" x1="20" x2="20" y1="215" y2="225"></line>
    <line stroke="black" x1="120" x2="120" y1="215" y2="225"></line>

    <line stroke="black" x1="215" x2="225" y1="120" y2="120"></line>
    <line stroke="black" x1="215" x2="225" y1="20" y2="20"></line>

    <line stroke="black" x1="215" x2="225" y1="320" y2="320"></line>
    <line stroke="black" x1="215" x2="225" y1="420" y2="420"></line>


    <!-- Подписи к осям -->
    <text fill="black" x="430" y="240">X</text>
    <text fill="black" x="230" y="15">Y</text>

    <!-- Заштрихованные области -->
    <!-- Треугольник -->
    <polygon fill="blue" points="220,220 20,220 220,20" opacity="0.7"></polygon>
    <!-- Сектор круга -->
    <path
        d="M 220,220 L 220,320 A 100,100 0 0,1 120,220 Z"
        fill="blue"
        opacity="0.7">
    </path>
    <!-- Прямоугольник -->
    <rect
        x="220"
        y="220"
        width="200"
        height="100"
        fill="blue"
        opacity="0.7">
    </rect>
  </svg>
</template>

<script>
export default {
  name: "GraphComponent",
};
</script>

<style>
/* Стилей в данном случае не требуется, так как всё реализуется в SVG */
</style>
