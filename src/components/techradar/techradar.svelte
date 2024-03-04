<script lang="ts">	
import type { discipline, category, phase, Item } from './data';
import { items } from './data';

const categoryTitle = {
    techniques: 'Techniques',
    tools: 'Tools',
    platform: 'Platform',
    languages: 'Languages&Frameworks'
}

let types: discipline[] = ['QA', 'backend', 'frontend', 'iOS', 'android', 'ML'];

interface CategoryItem {
    name: category;
    title: string;
}

let activeSection: category | null = null;
let activeMobDiscipline: discipline | null = null;
let activeCategory: category = 'techniques';
let active = false;
let activeItem: Item | null = null;
let posX = 0;
let posY = 0;
let activeDiscipline: discipline | null = null;
let radar;

const radius = 85;

const borders: Record<phase, number> = {
    adopt: radius,
    trial: radius + 72,
    assess: radius + 72 * 2,
    hold: radius + 72 * 3,
}

const categories: CategoryItem[] = [
    {
        name: 'techniques',
        title: 'Techniques >'
    },
    {
        name: 'tools',
        title: 'Tools >'
    },
    {
        name: 'platform',
        title: 'Platform >'
    },
    {
        name: 'languages',
        title: 'Languages &Frameworks >'
    }
];

const startY = 304;
const startX = 506;
const gapY = 75;
const firstGapY = 88;
const gapX = 194;
const commonGap = 10;

const rectangleBorders = {
    adopt: {
        techniques: {
            minY: startY + commonGap,
            maxY: startY + firstGapY - commonGap,
            minX: startX + 10,
            maxX: startX + gapX,
        },
        tools: {
            minY: startY + commonGap,
            maxY: startY + gapY - commonGap,
            minX: startX - commonGap,
            maxX: startX - gapX,
        },
        platform: {
            minY: startY - commonGap,
            maxY: startY - firstGapY + commonGap,
            minX: startX - commonGap,
            maxX: startX - gapX,
        },
        languages: {
            minY: startY - commonGap,
            maxY: startY - firstGapY + commonGap,
            minX: startX + commonGap,
            maxX: startX + gapX,
        },
    },
    trial: {
        techniques: {
            minY: startY + firstGapY,
            maxY: startY + firstGapY + gapY,
            minX: startX,
            maxX: startX + gapX,
        },
        tools: {
            minY: startY + firstGapY,
            maxY: startY + firstGapY + gapY,
            minX: startX,
            maxX: startX - gapX,
        },
        platform: {
            minY: startY - firstGapY,
            maxY: startY - firstGapY - gapY,
            minX: startX,
            maxX: startX - gapX,
        },
        languages: {
            minY: startY - firstGapY,
            maxY: startY - firstGapY - gapY,
            minX: startX,
            maxX: startX + gapX,
        },
    },
    assess: {
        techniques: {
            minY: startY + firstGapY + gapY,
            maxY: startY + firstGapY + gapY * 2,
            minX: startX,
            maxX: startX + gapX,
        },
        tools: {
            minY: startY + firstGapY + gapY,
            maxY: startY + firstGapY + gapY * 2,
            minX: startX,
            maxX: startX - gapX,
        },
        platform: {
            minY: startY - firstGapY - gapY,
            maxY: startY - firstGapY - gapY * 2,
            minX: startX,
            maxX: startX - gapX,
        },
        languages: {
            minY: startY - firstGapY - gapY,
            maxY: startY - firstGapY - gapY * 2,
            minX: startX,
            maxX: startX + gapX,
        },
    },
    hold: {
        techniques: {
            minY: startY + firstGapY + gapY * 2,
            maxY: startY + firstGapY + gapY * 3,
            minX: startX,
            maxX: startX + gapX,
        },
        tools: {
            minY: startY + firstGapY + gapY * 2,
            maxY: startY + firstGapY + gapY * 3,
            minX: startX,
            maxX: startX - gapX,
        },
        platform: {
            minY: startY - firstGapY - gapY * 2,
            maxY: startY - firstGapY - gapY * 3,
            minX: startX,
            maxX: startX - gapX,
        },
        languages: {
            minY: startY - firstGapY - gapY * 2,
            maxY: startY - firstGapY - gapY * 3,
            minX: startX,
            maxX: startX + gapX,
        },
    },
}

const circleBorders = {
    techniques: {
        minAngle: 0,
        maxAngle: Math.PI / 2,
        center: { centerX: 704, centerY: 304 },
    },
    tools: {
        minAngle: Math.PI / 2,
        maxAngle: Math.PI,
        center: { centerX: 307, centerY: 304 },
    },
    platform: {
        minAngle: Math.PI,
        maxAngle: 3 * Math.PI / 2,
        center: { centerX: 307, centerY: 304 },
    },
    languages: {
        minAngle: 3 * Math.PI / 2,
        maxAngle: 2 * Math.PI,
        center: { centerX: 704, centerY: 304 },
    },
};

items.sort((a, b) => a.name.localeCompare(b.name));

// Алгоритм группировки по полю 'category'
const groupByCategory = (items: Item[]): Record<category, Item[]> => {
    const result: Record<category, Item[]> = {} as Record<category, Item[]>;

    items.forEach(item => {
        const { category } = item;

        if (!result[category]) {
            result[category] = [];
        }
        result[category].push(item);
    });

    return result;
};

// Получение результата группировки
const groupedItems = groupByCategory(items);

// Алгоритм группировки по полю 'phase'
const groupByPhase = (items: Item[]): Record<string, Item[]> => {
  return items.reduce((result, item) => {
      const { phase } = item;
      if (!result[phase]) {
          result[phase] = [];
      }
      result[phase].push(item);
      return result;
  }, {adopt: [], trial: [], assess: [], hold: []} as Record<string, Item[]>); // Используем явное приведение типа для избежания ошибки
};

const groupByDiscipline = (items: Item[]): Record<discipline, Item[]> => {
    const result: Record<discipline, Item[]> = {} as Record<discipline, Item[]>;

    items.forEach(item => {
        const { discipline } = item;
        
        discipline.forEach(d => {
            if (!result[d]) {
                result[d] = [];
            }
            result[d].push(item);
        });
    });

    return result;
};

const getRandomPos = (a: number, b: number) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const randomDecimal = Math.random();

  const number = Math.ceil(min + randomDecimal * (max - min));

  return number;
};

const getRandomCirclePos = (item: Item) => {
    let radius = borders[item.phase];
    const { centerX, centerY } = circleBorders[item.category].center;
    const minAngle = circleBorders[item.category].minAngle;
    const maxAngle = circleBorders[item.category].maxAngle;
    const alpha = minAngle + Math.random() * (maxAngle - minAngle);
    const x = radius * Math.cos(alpha);
    const y = radius * Math.sin(alpha);

    let distanceFromCenter1 = getRandomPos(radius, radius - 60);
    
    const vectorLength = Math.sqrt(x * x + y * y);
    const scale = distanceFromCenter1 / vectorLength;

    const newX = centerX + x * scale;
    const newY = centerY + y * scale;

    return { x: newX, y: newY, alpha };
}

function getRandomBoolean() {
  return Math.random() < 0.3;
}

function getRandomSquarePos(item: Item) {
    const x = getRandomPos(rectangleBorders[item.phase][item.category].minX, rectangleBorders[item.phase][item.category].maxX)
    const y = getRandomPos(rectangleBorders[item.phase][item.category].minY, rectangleBorders[item.phase][item.category].maxY)
    
    return {x, y}
}

function generateRandomPoint(item: Item) {
    if (getRandomBoolean()) {
        return getRandomCirclePos(item);
    } else {
        return getRandomSquarePos(item);
    }
}

const onMouseEnter = (evt: MouseEvent, item: Item) => {
    posX = evt.x;
    posY = radar.getBoundingClientRect().top < evt.y - 80 ? evt.y : evt.y + 80;
    activeItem = item;
    active = true
};

const onMouseLeave = () => {
    active = false;
    activeItem = null;
};
</script>

<div class="techradar" class:column123={activeSection}>
    <div class="mobile">
        <div class="tech-header">
            <div class="di">
                <div class="text-large-title">
                    Tech Radar
                </div>
                <div class="text-large-title">
                    *
                </div>
            </div>
            <img src="images/radar.svg" class="techradar-bg" alt="">
        </div>
        <aside>
            {#if !activeMobDiscipline}
                <div class="section-container">
                    {#each types as type}
                        <div class="category text-title-2" aria-hidden on:click={() => activeMobDiscipline = type}>{ type }</div>
                    {/each}
                </div>
            {:else}
                <img src="images/arrow.svg" on:click={() => activeMobDiscipline=null} aria-hidden="true" alt="">
            {/if}
        </aside>
        {#if activeMobDiscipline}
            <div class="categories">
                {#each categories as category}
                    <div class="category text-title-2" aria-hidden class:disabled={activeCategory !== category.name} on:click={() => activeCategory = category.name}>{ categoryTitle[category.name] }</div>
                {/each}
            </div>
            <div class="columns columns1">
                {#each Object.entries(groupByPhase(groupByCategory(groupByDiscipline(items)[activeMobDiscipline])[activeCategory])) as [phase, group]}
                    <div class="column">
                        <h2 class="text-title-3">{ phase }</h2>
                        <ul>
                            {#each group as item} 
                                <li class="text-body">{item.name}</li>
                            {/each}
                            {#if !group.length}
                                <li class="text-body"> — </li>
                            {/if}
                        </ul>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
    <div class="desktop" class:column1={activeSection}>
        <aside>
            <h1 class="text-title-1">{ categoryTitle[activeSection] || 'TechRadar' }</h1>
            <div class="stack">
                {#each types as type}
                    <div class="stack-item text-title-3" aria-hidden on:click={() => activeDiscipline === type ? activeDiscipline = null : activeDiscipline = type} class:disabled={activeItem !== null && activeItem.discipline.includes(type) || activeDiscipline !== null && activeDiscipline !== type}> {type} </div>
                {/each}
            </div>
            {#if !activeSection}
                <div class="section-container">
                    {#each categories as category}
                        <div class="category text-title-2" aria-hidden on:click={() => activeSection = category.name} class:disabled={activeItem !== null && activeItem?.category !== category.name}>{ category.title }</div>
                    {/each}
                </div>
            {/if} 
        </aside>
        {#if activeSection}
            <div class="columns">
                {#each Object.entries(groupByPhase(groupedItems[activeSection])) as [phase, items]}
                    <div class="column">
                        <h2 class="text-title-3">{phase}</h2>
                        <ul>
                            {#each items as item} 
                                {#if item.category === activeSection}
                                    <li class="text-body" class:disabled={activeDiscipline !== null && !item.discipline.includes(activeDiscipline)}>{item.name}</li>
                                {/if}
                            {/each}
                            {#if !items.length}
                                <li class="text-body"> — </li>
                            {/if}
                        </ul>
                    </div>
                {/each}
            </div>
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" bind:this={radar} width='100%' height="608" viewBox="0 0 1011 608" fill="none">
                <path class:disabledLine={activeItem !== null} d="M506 1L506 608" stroke="black"/>
                <path class:disabledLine={activeItem !== null} d="M1011 304L3.61204e-05 304" stroke="black"/>
                <rect x="0.5" y="0.5" width="1010" height="607" rx="303.5" stroke="#BABABA"/>
                <rect class:disabledLine={activeItem !== null && activeItem.phase !== 'assess'} x="71.5" y="73.5" width="868" height="461" rx="230.5" stroke="black"/>
                <rect class:disabledLine={activeItem !== null && activeItem.phase !== 'trial'} x="143.5" y="143.5" width="724" height="321" rx="160.5" stroke="black"/>
                <rect class:disabledLine={activeItem !== null && activeItem.phase !== 'adopt'} x="215.5" y="216.5" width="580" height="175" rx="87.5" stroke="black"/>
                <text class:disabled={activeItem !== null && activeItem.phase !== 'adopt'} x="514" y="385" fill='black'> adopt </text>
                <text class:disabled={activeItem !== null && activeItem.phase !== 'trial'} x="514" y="453" fill='black'> trial </text>
                <text class:disabled={activeItem !== null && activeItem.phase !== 'assess'} x="514" y="523" fill='black'> assess </text>
                <text x="514" y="596" fill='#BABABA'> hold </text>
            
                {#each items as item}
                    {@const pos = generateRandomPoint(item)}
                    <circle aria-hidden="true" class:hidden={activeDiscipline !== null && !item.discipline.includes(activeDiscipline)} class:disabled={activeItem !== null && activeItem.name !== item.name} on:mouseenter={evt => onMouseEnter(evt, item)} on:mouseleave={onMouseLeave} class={`circle ${item.category}`} cx={pos.x} cy={pos.y} r="4"/>
                {/each}
            </svg>
        {/if}
    
        {#if active}
            <div class="hover-item" style={`left: ${posX + 8}px; top: ${posY - 70}px`}>
                <div class="text-title-3"> { activeItem?.name } </div>
                <div class="text-body"> { activeItem?.discipline.join(', ') } </div>
            </div>
        {/if} 
        
    </div>
    {#if activeSection}
        <button class="text-button" on:click={() => {activeSection = null}}>
            закрыть
        </button>
    {/if}
</div>

<style lang="scss">
    @import "../../styles/global.scss";

    svg {
        position: relative;
    }
    .techradar {
        display: flex;
        color: black;
        padding: 80px 16px 16px 16px;
        flex: 1;
    }
    .stack {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 16px;
        margin-top: 16px;
        cursor: pointer;
        width: 300px;
    }
    .circle {
        position: absolute;
    }
    .circle.hidden {
        display: none;
    }
    .circle, .category, .stack-item {
        transition: opacity 0.3s;
    }
    .circle.disabled, .category.disabled, .stack-item.disabled {
        opacity: 0.5;
    }
    .circle.languages {
        fill: black;
    }
    .circle.tools {
        fill: #1EBB55;
    }
    .circle.techniques {
        fill: #FF7700;
    }
    .circle.platform {
        fill: #0099FF;
    }
    .hover-item {
        position: absolute;
        background: black;
        color: white;
        padding: 8px 12px;
    }
    .category {
        cursor: pointer;
    }
    .section-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-top: 64px;
    }
    .disabled {
        opacity: 0.5;
    }
    .columns {
        display: flex;
        gap: 35px;
        padding-top: 35px;
    }
    
    .columns1 {
      flex-direction: column;
    }
    
    .column1 {
      flex-direction: column;
    }
    .column123 {
      background-color: #F0F0F0;
    }
    button {
        position: fixed;
        width: 164px;
        height: 164px;
        border-radius: 100%;
        right: 20px;
        bottom: 90px;
        background-color: #FFFFFF;
    }
    .disabledLine {
        stroke: #BABABA;
    }
    rect, path {
        transition: all 0.3s;
    }
    
    .desktop {
        display: none;
    }
    
    .categories {
        display: flex;
        gap: 12px;
        overflow-x: scroll;
        min-width: 0;
        margin-top: 20px;
    }
    .mobile {
        overflow: hidden;
    }

    .techradar-bg {
        width: 100%;
    }
    
    .tech-header {
        display: flex;
        gap: 56px;
        
        .di {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
    @include desktop {
        .desktop {
            display: flex;
            width: 100%;
        }
        .mobile {
            display: none;
        }
        
        .column {
          max-width: 350px;
        }
    }
</style>