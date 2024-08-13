import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '前端知识手册',
			social: {
				github: 'https://github.com/sui-mu/frondend_book_zh_cn.git',
			},
			sidebar: [
				{
					label: '前端基础',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '前端发展史概述', slug: 'frontend_basics/history' },
						{ label: 'HTML', slug: 'frontend_basics/html' },
						{ label: 'CSS', slug: 'frontend_basics/css' },
						{ label: 'JavaScript', slug: 'frontend_basics/javascript' },
					],
				},
				{
					label: '前端工程化',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'NodeJS', slug: 'frontend_project/nodejs' },
						{ label: 'React', slug: 'frontend_project/react' },
						{ label: 'Vue', slug: 'frontend_project/vue' },
					],
				},
				{
					label: '计算机基础',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '数据库', slug: 'computer_basics/database' },
						{ label: '数据结构', slug: 'computer_basics/data_structures' },
						{ label: '算法', slug: 'computer_basics/algorithms' },
						{ label: '设计模式', slug: 'computer_basics/design_pattern' },
					],
				},
			],
		}),
	],
});
