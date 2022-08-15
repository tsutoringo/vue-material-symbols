import { mount } from '@vue/test-utils'
import GSymbol from '../components/GSymbol.vue'
import { test, expect } from 'vitest';

test('icon property', () => {
  const icon = 'cake';

  const gSymbol = mount(GSymbol, {
    props: {
      icon
    },
  });

  expect(gSymbol.text()).equal(icon)
});
