// @flow

import { Router } from "express";

const posts = [];
const router = Router();
let id = 0;

/**
 * Load
 * @param {*} req request
 * @param {*} res response
 * @param {*} next next function
 * @param {*} id id of post
 */
function load(req, res, next, id) {
  const post = posts.find(p => p.id == id); // eslint-disable-line
  Object.assign(req, { post });
  return next();
}

/**
 * List
 * @param {*} req request
 * @param {*} res response
 */
function list(req, res) {
  return res.json(posts);
}

/**
 * Create
 * @param {*} req.body post
 * @param {*} res response
 */
function create({ body }, res) {
  id++;
  const post = { ...body, id };
  posts.push(post);
  return res.json(post);
}

/**
 * Get
 * @param {*} req.post post
 * @param {*} res response
 */
function get({ post }, res) {
  return res.json(post);
}

/**
 * Update
 * @param {*} req request
 * @param {*} res response
 */
function update(req, res) {
  delete req.body.id;
  Object.assign(req.post, req.body);
  return res.json(req.post);
}

/**
 * Remove
 * @param {*} req.post post
 * @param {*} res resonse
 */
function remove({ post }, res) {
  const pos = posts.indexOf(post);
  posts.splice(pos, 1);
  return res.json({});
}

// routers
router.param("id", load);
router.get("/", list);
router.post("/", create);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
