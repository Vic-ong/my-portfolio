import { computed, onMounted, onUnmounted, ref, ComputedRef } from 'vue';

export interface Breakpoints {
  readonly 'xs': boolean;
  readonly 'sm': boolean;
  readonly 'md': boolean;
  readonly 'lg': boolean;
  readonly 'xl': boolean;
  readonly '2xl': boolean;
  readonly 'smAndBelow': boolean;
  readonly 'mdAndBelow': boolean;
  readonly 'mdAndAbove': boolean;
  readonly 'lgAndBelow': boolean;
  readonly 'lgAndAbove': boolean;
}

const windowWidth = ref(window.innerWidth);

const onWidthChange = () => windowWidth.value = window.innerWidth;

export const initBreakpoints = (): void => {
  onMounted(() => window.addEventListener('resize', onWidthChange));
  onUnmounted(() => window.removeEventListener('resize', onWidthChange));
};

export const useBreakpoints = (): ComputedRef<Breakpoints> => {
  const breakpoints = computed((): Breakpoints => {
    return {
      'xs': windowWidth.value <= 639,
      'sm': windowWidth.value >= 640  && windowWidth.value <= 767,
      'md': windowWidth.value >= 768  && windowWidth.value <= 1023,
      'lg': windowWidth.value >= 1024 && windowWidth.value <= 1279,
      'xl': windowWidth.value >= 1280 && windowWidth.value <= 1535,
      '2xl': windowWidth.value >= 1536,
      'smAndBelow': windowWidth.value <= 767,
      'mdAndBelow': windowWidth.value <= 1023,
      'mdAndAbove': windowWidth.value >= 768,
      'lgAndBelow': windowWidth.value <= 1279,
      'lgAndAbove': windowWidth.value >= 1024,
    };
  });

  return breakpoints;
};
