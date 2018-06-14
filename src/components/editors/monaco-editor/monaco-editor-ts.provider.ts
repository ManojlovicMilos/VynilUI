import { Injectable } from '@angular/core';
import { CompletionItemProvider } from 'ngx-monaco';

@Injectable()
export class TypescriptCompletionProvider implements CompletionItemProvider
{
	public get language() { return "typescript"; }
	public provideCompletionItems(model: monaco.editor.IReadOnlyModel): any
	{
		let filename:string = model.uri.path.split('/').pop();
		if (!filename.endsWith(".ts")) return [];
		return [];
	}
}