function getTestData(){
    var data = [{"name":"pub_gfritz_queryname1_2014","lastModified":"20 - May - 2015 16:30:06","xml":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Query name=\"E36FDF82-8E9C-B688-AF09-8DCAB99C87DD\" type=\"QM\" connection=\"dodax\" cube=\"[Sales Dodax]\" catalog=\"Sales\" schema=\"Sales\">\n  <QueryModel>\n    <Axes>\n      <Axis location=\"ROWS\" nonEmpty=\"true\">\n        <Dimensions>\n          <Dimension name=\"Measures\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"false\">\n            <Inclusions>\n              <Selection dimension=\"Measures\" type=\"member\" node=\"[Measures].[Positions Count]\" operator=\"MEMBER\" />\n              <Selection dimension=\"Measures\" type=\"member\" node=\"[Measures].[Revenue]\" operator=\"MEMBER\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n        </Dimensions>\n      </Axis>\n      <Axis location=\"COLUMNS\" nonEmpty=\"true\">\n        <Dimensions>\n          <Dimension name=\"Article_type\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"true\">\n            <Inclusions>\n              <Selection dimension=\"Article_type\" type=\"member\" node=\"[Article_type].[CD]\" operator=\"MEMBER\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n          <Dimension name=\"Time (Order date)\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"true\">\n            <Inclusions>\n              <Selection dimension=\"Time (Order date)\" type=\"level\" node=\"[Time (Order date).Time by months].[Month]\" operator=\"MEMBERS\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n        </Dimensions>\n      </Axis>\n      <Axis location=\"FILTER\" nonEmpty=\"false\" />\n    </Axes>\n  </QueryModel>\n  <MDX>SELECT\nNON EMPTY CrossJoin({[Article_type].[CD]}, [Time (Order date).Time by months].[Month].Members) ON COLUMNS,\nNON EMPTY {Hierarchize({[Measures].[Positions Count], [Measures].[Revenue]})} ON ROWS\nFROM [Sales Dodax]</MDX>\n</Query>\n\n"},{"name":"pub_gfritz_queryname1_2015","lastModified":"20 - May - 2015 16:30:06","xml":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Query name=\"D8D2104F-D024-9846-AF5A-6B0925A6AD5D\" type=\"QM\" connection=\"dodax\" cube=\"[Sales Dodax]\" catalog=\"Sales\" schema=\"Sales\">\n  <QueryModel>\n    <Axes>\n      <Axis location=\"ROWS\" nonEmpty=\"true\">\n        <Dimensions>\n          <Dimension name=\"Measures\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"false\">\n            <Inclusions>\n              <Selection dimension=\"Measures\" type=\"member\" node=\"[Measures].[Revenue]\" operator=\"MEMBER\" />\n              <Selection dimension=\"Measures\" type=\"member\" node=\"[Measures].[Avg. revenue]\" operator=\"MEMBER\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n          <Dimension name=\"Plaform account\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"true\">\n            <Inclusions>\n              <Selection dimension=\"Plaform account\" type=\"level\" node=\"[Plaform account.Plaform].[Platform]\" operator=\"MEMBERS\" />\n              <Selection dimension=\"Plaform account\" type=\"level\" node=\"[Plaform account.Plaform].[Reseller]\" operator=\"MEMBERS\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n          <Dimension name=\"Article_type\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"true\">\n            <Inclusions>\n              <Selection dimension=\"Article_type\" type=\"level\" node=\"[Article_type].[Type]\" operator=\"MEMBERS\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n        </Dimensions>\n      </Axis>\n      <Axis location=\"COLUMNS\" nonEmpty=\"true\">\n        <Dimensions>\n          <Dimension name=\"Time (Time processed)\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"true\">\n            <Inclusions>\n              <Selection dimension=\"Time (Time processed)\" type=\"level\" node=\"[Time (Time processed).Time by months].[Month]\" operator=\"MEMBERS\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n        </Dimensions>\n      </Axis>\n      <Axis location=\"FILTER\" nonEmpty=\"false\" />\n    </Axes>\n  </QueryModel>\n  <MDX>SELECT\nNON EMPTY {Hierarchize({[Time (Time processed).Time by months].[Month].Members})} ON COLUMNS,\nNON EMPTY Hierarchize(Union(CrossJoin({[Measures].[Revenue]}, CrossJoin([Plaform account.Plaform].[Platform].Members, [Article_type].[Type].Members)), Union(CrossJoin({[Measures].[Revenue]}, CrossJoin([Plaform account.Plaform].[Reseller].Members, [Article_type].[Type].Members)), Union(CrossJoin({[Measures].[Avg. revenue]}, CrossJoin([Plaform account.Plaform].[Platform].Members, [Article_type].[Type].Members)), CrossJoin({[Measures].[Avg. revenue]}, CrossJoin([Plaform account.Plaform].[Reseller].Members, [Article_type].[Type].Members)))))) ON ROWS\nFROM [Sales Dodax]</MDX>\n</Query>\n\n"},{"name":"pub_gfritz_queryname2","lastModified":"20 - May - 2015 16:30:06","xml":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Query name=\"0B5E73F2-3660-64A4-9B31-D4A962DED96C\" type=\"QM\" connection=\"dodax\" cube=\"[Sales Dodax]\" catalog=\"Sales\" schema=\"Sales\">\n  <QueryModel>\n    <Axes>\n      <Axis location=\"ROWS\" nonEmpty=\"true\">\n        <Dimensions>\n          <Dimension name=\"Measures\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"false\">\n            <Inclusions>\n              <Selection dimension=\"Measures\" type=\"member\" node=\"[Measures].[Revenue]\" operator=\"MEMBER\" />\n              <Selection dimension=\"Measures\" type=\"member\" node=\"[Measures].[Avg. revenue]\" operator=\"MEMBER\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n        </Dimensions>\n      </Axis>\n      <Axis location=\"COLUMNS\" nonEmpty=\"true\">\n        <Dimensions>\n          <Dimension name=\"Time (Time processed)\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"true\">\n            <Inclusions>\n              <Selection dimension=\"Time (Time processed)\" type=\"level\" node=\"[Time (Time processed).Time by months].[Month]\" operator=\"MEMBERS\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n          <Dimension name=\"Plaform account\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"true\">\n            <Inclusions>\n              <Selection dimension=\"Plaform account\" type=\"level\" node=\"[Plaform account.Plaform].[Platform]\" operator=\"MEMBERS\" />\n              <Selection dimension=\"Plaform account\" type=\"level\" node=\"[Plaform account.Plaform].[Reseller]\" operator=\"MEMBERS\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n        </Dimensions>\n      </Axis>\n      <Axis location=\"FILTER\" nonEmpty=\"false\" />\n    </Axes>\n  </QueryModel>\n  <MDX>SELECT\nNON EMPTY Hierarchize(Union(CrossJoin([Time (Time processed).Time by months].[Month].Members, [Plaform account.Plaform].[Platform].Members), CrossJoin([Time (Time processed).Time by months].[Month].Members, [Plaform account.Plaform].[Reseller].Members))) ON COLUMNS,\nNON EMPTY {Hierarchize({[Measures].[Revenue], [Measures].[Avg. revenue]})} ON ROWS\nFROM [Sales Dodax]</MDX>\n</Query>\n\n"},{"name":"overview","lastModified":"20 - May - 2015 16:30:06","xml":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Query name=\"CF27292C-E20A-92BF-91BE-F73C66BACF9B\" type=\"QM\" connection=\"dodax\" cube=\"[Sales Dodax]\" catalog=\"Sales\" schema=\"Sales\">\n  <QueryModel>\n    <Axes>\n      <Axis location=\"ROWS\" nonEmpty=\"true\">\n        <Dimensions>\n          <Dimension name=\"Time (Time processed)\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"true\">\n            <Inclusions>\n              <Selection dimension=\"Time (Time processed)\" type=\"level\" node=\"[Time (Time processed).Time by months].[Month]\" operator=\"MEMBERS\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n          <Dimension name=\"Plaform account\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"true\">\n            <Inclusions>\n              <Selection dimension=\"Plaform account\" type=\"level\" node=\"[Plaform account.Plaform].[Reseller]\" operator=\"MEMBERS\" />\n              <Selection dimension=\"Plaform account\" type=\"level\" node=\"[Plaform account.Plaform].[Platform]\" operator=\"MEMBERS\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n        </Dimensions>\n      </Axis>\n      <Axis location=\"COLUMNS\" nonEmpty=\"true\">\n        <Dimensions>\n          <Dimension name=\"Measures\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"false\">\n            <Inclusions>\n              <Selection dimension=\"Measures\" type=\"member\" node=\"[Measures].[Revenue]\" operator=\"MEMBER\" />\n              <Selection dimension=\"Measures\" type=\"member\" node=\"[Measures].[Avg. revenue]\" operator=\"MEMBER\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n        </Dimensions>\n      </Axis>\n      <Axis location=\"FILTER\" nonEmpty=\"false\" />\n    </Axes>\n  </QueryModel>\n  <MDX>SELECT\nNON EMPTY {Hierarchize({[Measures].[Revenue], [Measures].[Avg. revenue]})} ON COLUMNS,\nNON EMPTY Hierarchize(Union(CrossJoin([Time (Time processed).Time by months].[Month].Members, [Plaform account.Plaform].[Reseller].Members), CrossJoin([Time (Time processed).Time by months].[Month].Members, [Plaform account.Plaform].[Platform].Members))) ON ROWS\nFROM [Sales Dodax]</MDX>\n</Query>\n\n"},{"name":"platformlevel","lastModified":"20 - May - 2015 16:30:06","xml":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Query name=\"C7D0A5A8-F1DA-FD78-9B93-2DB988F95BCD\" type=\"QM\" connection=\"dodax\" cube=\"[Sales Dodax]\" catalog=\"Sales\" schema=\"Sales\">\n  <QueryModel>\n    <Axes>\n      <Axis location=\"ROWS\" nonEmpty=\"true\">\n        <Dimensions>\n          <Dimension name=\"Plaform account\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"true\">\n            <Inclusions>\n              <Selection dimension=\"Plaform account\" type=\"level\" node=\"[Plaform account.Plaform].[Platform]\" operator=\"MEMBERS\" />\n              <Selection dimension=\"Plaform account\" type=\"level\" node=\"[Plaform account.Plaform].[Reseller]\" operator=\"MEMBERS\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n          <Dimension name=\"Measures\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"false\">\n            <Inclusions>\n              <Selection dimension=\"Measures\" type=\"member\" node=\"[Measures].[Avg. revenue]\" operator=\"MEMBER\" />\n              <Selection dimension=\"Measures\" type=\"member\" node=\"[Measures].[Revenue]\" operator=\"MEMBER\" />\n              <Selection dimension=\"Measures\" type=\"member\" node=\"[Measures].[Positions Count]\" operator=\"MEMBER\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n        </Dimensions>\n      </Axis>\n      <Axis location=\"COLUMNS\" nonEmpty=\"true\">\n        <Dimensions>\n          <Dimension name=\"Time (Time processed)\" hierarchizeMode=\"PRE\" hierarchyConsistent=\"true\">\n            <Inclusions>\n              <Selection dimension=\"Time (Time processed)\" type=\"member\" node=\"[Time (Time processed).Time by months].[2013].[Q3 2013].[2013-08]\" operator=\"MEMBER\" />\n            </Inclusions>\n            <Exclusions />\n          </Dimension>\n        </Dimensions>\n      </Axis>\n      <Axis location=\"FILTER\" nonEmpty=\"false\" />\n    </Axes>\n  </QueryModel>\n  <MDX>SELECT\nNON EMPTY {Hierarchize({[Time (Time processed).Time by months].[2013].[Q3 2013].[2013-08]})} ON COLUMNS,\nNON EMPTY Hierarchize(Union(CrossJoin([Plaform account.Plaform].[Platform].Members, {[Measures].[Avg. revenue]}), Union(CrossJoin([Plaform account.Plaform].[Platform].Members, {[Measures].[Revenue]}), Union(CrossJoin([Plaform account.Plaform].[Platform].Members, {[Measures].[Positions Count]}), Union(CrossJoin([Plaform account.Plaform].[Reseller].Members, {[Measures].[Avg. revenue]}), Union(CrossJoin([Plaform account.Plaform].[Reseller].Members, {[Measures].[Revenue]}), CrossJoin([Plaform account.Plaform].[Reseller].Members, {[Measures].[Positions Count]}))))))) ON ROWS\nFROM [Sales Dodax]</MDX>\n</Query>\n\n"}];
    return data;
}
                
                
function getTestResult(){
    var data = {"cellset":[[{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"AmazonDE","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE]","levelindex":"0","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"AmazonDE","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE]","levelindex":"0","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"AmazonDE","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE]","levelindex":"0","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"AmazonDE","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE]","levelindex":"0","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"AmazonDE","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE]","levelindex":"0","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"AmazonDE","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE]","levelindex":"0","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"AmazonDE","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE]","levelindex":"0","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"AmazonDE","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE]","levelindex":"0","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"AmazonDE","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE]","levelindex":"0","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"AmazonDE","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE]","levelindex":"0","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"AmazonDE","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE]","levelindex":"0","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"}],[{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"Dodax AG","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE].[Dodax AG]","levelindex":"1","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"Dodax AG","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE].[Dodax AG]","levelindex":"1","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"Dodax AG","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE].[Dodax AG]","levelindex":"1","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"Dodax AG","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE].[Dodax AG]","levelindex":"1","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"Dodax AG","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE].[Dodax AG]","levelindex":"1","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"Dodax AG","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE].[Dodax AG]","levelindex":"1","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"Dodax AG","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE].[Dodax AG]","levelindex":"1","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"Dodax AG","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE].[Dodax AG]","levelindex":"1","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"Dodax AG","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE].[Dodax AG]","levelindex":"1","dimension":"Plaform account"},"type":"COLUMN_HEADER"},{"value":"Dodax AG","properties":{"uniquename":"[Plaform account.Plaform].[AmazonDE].[Dodax AG]","levelindex":"1","dimension":"Plaform account"},"type":"COLUMN_HEADER"}],[{"value":"null","properties":{},"type":"COLUMN_HEADER"},{"value":"2011-02","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q1 2011].[2011-02]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-03","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q1 2011].[2011-03]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-04","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q2 2011].[2011-04]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-05","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q2 2011].[2011-05]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-06","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q2 2011].[2011-06]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-07","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q3 2011].[2011-07]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-08","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q3 2011].[2011-08]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-09","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q3 2011].[2011-09]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-10","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q4 2011].[2011-10]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-11","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q4 2011].[2011-11]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-12","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q4 2011].[2011-12]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-03","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q1 2011].[2011-03]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-04","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q2 2011].[2011-04]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-05","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q2 2011].[2011-05]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-06","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q2 2011].[2011-06]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-07","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q3 2011].[2011-07]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-08","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q3 2011].[2011-08]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-09","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q3 2011].[2011-09]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-10","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q4 2011].[2011-10]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-11","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q4 2011].[2011-11]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"},{"value":"2011-12","properties":{"uniquename":"[Time (Order date).Time by months].[2011].[Q4 2011].[2011-12]","levelindex":"0","dimension":"Time (Order date)"},"type":"COLUMN_HEADER"}],[{"value":"MeasuresLevel","properties":{"levelindex":"0"},"type":"ROW_HEADER_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"},{"value":"AENT","properties":{"uniquename":"[Supplier.by supplier group].[AENT]","levelindex":"0","dimension":"Supplier"},"type":"COLUMN_HEADER"}],[{"value":"Revenue","properties":{"uniquename":"[Measures].[Revenue]","levelindex":"0","dimension":"Measures"},"type":"ROW_HEADER"},{"value":"€ 2.36","properties":{"position":"0:0","raw":"2.36"},"type":"DATA_CELL"},{"value":"€ 22,966.74","properties":{"position":"1:0","raw":"22966.74"},"type":"DATA_CELL"},{"value":"€ 28,982.91","properties":{"position":"2:0","raw":"28982.91"},"type":"DATA_CELL"},{"value":"€ 31,303.70","properties":{"position":"3:0","raw":"31303.7"},"type":"DATA_CELL"},{"value":"€ 30,012.24","properties":{"position":"4:0","raw":"30012.24"},"type":"DATA_CELL"},{"value":"€ 30,425.91","properties":{"position":"5:0","raw":"30425.91"},"type":"DATA_CELL"},{"value":"€ 23,163.93","properties":{"position":"6:0","raw":"23163.93"},"type":"DATA_CELL"},{"value":"€ 19,410.59","properties":{"position":"7:0","raw":"19410.59"},"type":"DATA_CELL"},{"value":"€ 21,719.35","properties":{"position":"8:0","raw":"21719.35"},"type":"DATA_CELL"},{"value":"€ 20,557.24","properties":{"position":"9:0","raw":"20557.24"},"type":"DATA_CELL"},{"value":"€ 21,612.73","properties":{"position":"10:0","raw":"21612.73"},"type":"DATA_CELL"},{"value":"€ 11,240.89","properties":{"position":"11:0","raw":"11240.89"},"type":"DATA_CELL"},{"value":"€ 14,222.43","properties":{"position":"12:0","raw":"14222.43"},"type":"DATA_CELL"},{"value":"€ 14,564.38","properties":{"position":"13:0","raw":"14564.38"},"type":"DATA_CELL"},{"value":"€ 14,628.43","properties":{"position":"14:0","raw":"14628.43"},"type":"DATA_CELL"},{"value":"€ 15,693.68","properties":{"position":"15:0","raw":"15693.68"},"type":"DATA_CELL"},{"value":"€ 10,383.65","properties":{"position":"16:0","raw":"10383.65"},"type":"DATA_CELL"},{"value":"€ 8,688.81","properties":{"position":"17:0","raw":"8688.81"},"type":"DATA_CELL"},{"value":"€ 10,059.89","properties":{"position":"18:0","raw":"10059.89"},"type":"DATA_CELL"},{"value":"€ 8,669.25","properties":{"position":"19:0","raw":"8669.25"},"type":"DATA_CELL"},{"value":"€ 8,361.80","properties":{"position":"20:0","raw":"8361.8"},"type":"DATA_CELL"}],[{"value":"Positions Count","properties":{"uniquename":"[Measures].[Positions Count]","levelindex":"0","dimension":"Measures"},"type":"ROW_HEADER"},{"value":"1","properties":{"position":"0:1","raw":"1.0"},"type":"DATA_CELL"},{"value":"18,680","properties":{"position":"1:1","raw":"18680.0"},"type":"DATA_CELL"},{"value":"23,848","properties":{"position":"2:1","raw":"23848.0"},"type":"DATA_CELL"},{"value":"25,029","properties":{"position":"3:1","raw":"25029.0"},"type":"DATA_CELL"},{"value":"22,671","properties":{"position":"4:1","raw":"22671.0"},"type":"DATA_CELL"},{"value":"22,644","properties":{"position":"5:1","raw":"22644.0"},"type":"DATA_CELL"},{"value":"18,067","properties":{"position":"6:1","raw":"18067.0"},"type":"DATA_CELL"},{"value":"17,383","properties":{"position":"7:1","raw":"17383.0"},"type":"DATA_CELL"},{"value":"19,442","properties":{"position":"8:1","raw":"19442.0"},"type":"DATA_CELL"},{"value":"20,111","properties":{"position":"9:1","raw":"20111.0"},"type":"DATA_CELL"},{"value":"17,429","properties":{"position":"10:1","raw":"17429.0"},"type":"DATA_CELL"},{"value":"9,333","properties":{"position":"11:1","raw":"9333.0"},"type":"DATA_CELL"},{"value":"11,802","properties":{"position":"12:1","raw":"11802.0"},"type":"DATA_CELL"},{"value":"11,385","properties":{"position":"13:1","raw":"11385.0"},"type":"DATA_CELL"},{"value":"10,533","properties":{"position":"14:1","raw":"10533.0"},"type":"DATA_CELL"},{"value":"11,323","properties":{"position":"15:1","raw":"11323.0"},"type":"DATA_CELL"},{"value":"7,667","properties":{"position":"16:1","raw":"7667.0"},"type":"DATA_CELL"},{"value":"7,082","properties":{"position":"17:1","raw":"7082.0"},"type":"DATA_CELL"},{"value":"8,204","properties":{"position":"18:1","raw":"8204.0"},"type":"DATA_CELL"},{"value":"7,536","properties":{"position":"19:1","raw":"7536.0"},"type":"DATA_CELL"},{"value":"5,904","properties":{"position":"20:1","raw":"5904.0"},"type":"DATA_CELL"}]],"error":null,"height":6,"width":22,"runtime":21};
                return data;
}