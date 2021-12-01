using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Solutions.Days;

namespace Solutions.Tests.Days;

[TestClass]
public class UnitTest1
{
    private readonly Day01 _day01 = new();
    private string? _input;

    [TestInitialize]
    public async Task Initialize()
    {
        _input = await File.ReadAllTextAsync("./Inputs/Day01.txt");
    }

    [TestMethod]
    public void HandTestPart1()
    {
        var input = @"199
200
208
210
200
207
240
269
260
263";
        var answer = _day01.Part1(input);
        Debug.WriteLine(answer);
    }

    [TestMethod]
    public void Part1()
    {
        var answer = _day01.Part1(_input!);
        Debug.WriteLine(answer);
        Assert.AreEqual(answer, 1709);
    }

    [TestMethod]
    public void HandTestPart2()
    {
        var input = @"
    199
    200
    208
    210
    200
    207
    240
    269
    260
    263
";
        var answer = _day01.Part2(input);
        Debug.WriteLine(answer);
    }

    [TestMethod]
    public void Part2()
    {
        var answer = _day01.Part2(_input!);
        Debug.WriteLine(answer);
        Assert.AreEqual(answer, 1761);
    }
}
