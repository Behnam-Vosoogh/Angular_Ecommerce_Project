import { CanActivateFn } from '@angular/router';
import { SellService } from './services/sell.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const sellService = inject(SellService);
  // if (localStorage.getItem('sellerToken')) {
  //   return true;
  // }
  console.warn('localStorage');
  console.warn(localStorage);
  if (
    typeof localStorage !== 'undefined' &&
    localStorage.getItem('sellerToken')
  ) {
    console.warn('localStorage');
    console.warn(localStorage);
    return true;
  }

  return sellService.isSellerLoggedIN.value;
};
