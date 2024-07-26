export class Nx17Library {
  constructor(private isDesktop: boolean) {}
  getIsDesktop = (): boolean => this.isDesktop;
}
