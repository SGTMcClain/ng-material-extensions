import * as XLSX from 'xlsx';
import { FileExporter } from './file-exporter';
/**
 * An angular service class that is used to create files out of json object arrays.
 */
export class WorksheetExporter extends FileExporter {
    constructor() {
        super();
    }
    createContent(rows, options) {
        const workSheet = XLSX.utils.json_to_sheet(rows, {
            skipHeader: true // we don't want to see object properties as our headers
        });
        return this.workSheetToContent(workSheet, options);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NoZWV0LWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy93b3Jrc2hlZXQtZXhwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7QUFFN0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DOztHQUVHO0FBQ0gsTUFBTSxPQUFnQixpQkFBcUIsU0FBUSxZQUFlO0lBRWhFO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRU0sYUFBYSxDQUFDLElBQWdCLEVBQUUsT0FBVztRQUNoRCxNQUFNLFNBQVMsR0FBb0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQ2hFLFVBQVUsRUFBRSxJQUFJLENBQUMsd0RBQXdEO1NBQzFFLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBSUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xyXG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XHJcbmltcG9ydCB7IEZpbGVFeHBvcnRlciB9IGZyb20gJy4vZmlsZS1leHBvcnRlcic7XHJcbi8qKlxyXG4gKiBBbiBhbmd1bGFyIHNlcnZpY2UgY2xhc3MgdGhhdCBpcyB1c2VkIHRvIGNyZWF0ZSBmaWxlcyBvdXQgb2YganNvbiBvYmplY3QgYXJyYXlzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdvcmtzaGVldEV4cG9ydGVyPFQ+IGV4dGVuZHMgRmlsZUV4cG9ydGVyPFQ+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZUNvbnRlbnQocm93czogQXJyYXk8YW55Piwgb3B0aW9ucz86IFQpOiBhbnkge1xyXG4gICAgY29uc3Qgd29ya1NoZWV0OiBYTFNYLldvcmtTaGVldCA9ICBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQocm93cywge1xyXG4gICAgICBza2lwSGVhZGVyOiB0cnVlIC8vIHdlIGRvbid0IHdhbnQgdG8gc2VlIG9iamVjdCBwcm9wZXJ0aWVzIGFzIG91ciBoZWFkZXJzXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLndvcmtTaGVldFRvQ29udGVudCh3b3JrU2hlZXQsIG9wdGlvbnMpO1xyXG4gIH1cclxuICBwdWJsaWMgYWJzdHJhY3Qgd29ya1NoZWV0VG9Db250ZW50KHdvcmtTaGVldDogWExTWC5Xb3JrU2hlZXQsIG9wdGlvbnM/OiBUKTogYW55O1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRNaW1lVHlwZSgpOiBNaW1lO1xyXG5cclxufVxyXG4iXX0=