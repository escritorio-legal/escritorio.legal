export default interface Repository {
  create(): any;
  findAll();
  findOne();
  update();
  remove();
}
