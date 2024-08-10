import { CanActivateFn } from '@angular/router';
import { SellService } from './services/sell.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const sellService = inject(SellService);
  if (localStorage.getItem('sellerToken')) {
    return true;
  }

  return sellService.isSellerLoggedIN.value;
};
